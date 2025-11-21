import { DbQueryValue } from "@/types/db";
import { queryDatabase } from "./queryDatabase";
import { ArticleT } from "@/types/blog";

export const getArticlesFromDB = async ({ showHidden = false }: fnGetArticlesFromDBParams) => {

	const values: DbQueryValue[] = []

	// Build the WHERE predicate.
	const whereParts: string[] = []

	if (!showHidden) {
		whereParts.push('visible = ?')
		values.push('1')
	}

	// SELECT clause
	const select = new DBQuerySelectClause([
		'articles.slug AS slug',
		'articles.title AS title',
		'articles.date AS date',
		'categories.slug AS category',
		'articles.excerpt AS excerpt',
		'articles.body AS body',
	])

	// FROM clause
	const from = new DBQueryFromClause(['articles'])

	// JOIN clause
	const join = new DBQueryJoinClause(['categories'])

	// ON clause
	const on = new DBQueryOnClause(['articles.category = categories.id'])

	// WHERE clause
	const where = new DBQueryWhereClause(whereParts)

	// ORDER BY clause
	const orderBy = new DBQueryOrderByClause(['articles.date DESC'])

	// Build the query string.
	const query = [
		select,
		from,
		join,
		on,
		where,
		orderBy,
	].join(' ')

	// Return the result of the direct-to-DB query.
	const result = await queryDatabase<ArticleT>({ query, values });

	return result
}

type fnGetArticlesFromDBParams = {
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

class DBQueryJoinClause extends DBQueryClause {
	constructor(values) {
		super('JOIN', values, { conjoiner: ' AND ' })
	}
}

class DBQueryOnClause extends DBQueryClause {
	constructor(values) {
		super('ON', values, { conjoiner: ', ' })
	}
}
class DBQueryWhereClause extends DBQueryClause {
	constructor(values) {
		super('WHERE', values, { conjoiner: ' AND ' })
	}
}

class DBQueryOrderByClause extends DBQueryClause {
	constructor(values) {
		super('ORDER BY', values, { conjoiner: ', ' })
	}
}
