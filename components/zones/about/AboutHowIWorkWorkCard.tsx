export const AboutHowIWorkWorkCard = ({ work: { title, description, features } }) => (
  <div className="space-y-3">
    <h3 className="whatido-work-title font-heading text-sm md:text-base text-text">
      {title}
    </h3>
    <p className="whatido-work-description">
      {description}
    </p>
    <ul className="whatido-work-features space-y-1.5 text-xs md:text-sm">
      {features.map(feature => <li>{feature}</li>)}
    </ul>
  </div>
)