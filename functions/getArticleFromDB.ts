import { DbQueryValue } from "@/types/db";
import { queryDatabase } from "./queryDatabase";

export const getArticleFromDB = async ({ id, slug, showHidden = false }: fnGetArticleFromDBParams) => {
    if (!id && !slug) throw new Error('getArticleFromDB() ERROR: Neither id nor slug was provided.')

    const values: DbQueryValue[] = []

    // Build the WHERE predicate.
    const whereParts: string[] = []
    if (id) {
        whereParts.push('id = ?')
        values.push(id as string)
    }
    else if (slug) {
        whereParts.push('slug = ?')
        values.push(slug)
    }
    if (!showHidden) {
        whereParts.push('visible = ?')
        values.push('1')
    }

    // SELECT clause
    const select = new DBQuerySelectClause(['*'])

    // FROM clause
    const from = new DBQueryFromClause(['articles'])

    // WHERE clause
    const where = new DBQueryWhereClause(whereParts)

    // LIMIT clause
    const limit = new DBQueryLimitClause(['1'])

    // Build the query string.
    const query = [
        select,
        from,
        where,
        limit
    ].join(' ')

    // Return the result of the direct-to-DB query.
    const result = await queryDatabase({ query, values })

    return result[0]
}

type fnGetArticleFromDBParams = {
    id?: string | number,
    slug?: string,
    showHidden?: boolean,
}

abstract class DBQueryClause {
    protected theName: string
    protected theValues: string[]
    protected theConjoiner: string

    constructor(name, values, { conjoiner }: DBQueryClauseParams) {
        this.theName = name
        this.theValues = values
        this.theConjoiner = conjoiner ?? ''
    }

    get name() {
        return this.theName
    }
    get value() {
        return this.theValues.join(this.theConjoiner)
    }

    toString() {
        return this.name + ' ' + this.value
    }
}

type DBQueryClauseParams = {
    conjoiner?: string
}



class DBQuerySelectClause extends DBQueryClause {
    constructor(values) {
        super('SELECT', values, { conjoiner: ', ' })
    }
}

class DBQueryFromClause extends DBQueryClause {
    constructor(values) {
        super('FROM', values, { conjoiner: ', ' })
    }
}

class DBQueryWhereClause extends DBQueryClause {
    constructor(values) {
        super('WHERE', values, { conjoiner: ' AND ' })
    }
}

class DBQueryLimitClause extends DBQueryClause {
    constructor(values) {
        super('LIMIT', values, { conjoiner: ', '})
    }
}