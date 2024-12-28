import Link from 'next/link'
import Image from 'next/image'

export default function RecipeCard({ recipe }) {
  const { title, slug, price, thumbnail } = recipe.fields

  return (
    <div className="card">
      <div className="featured">
        <Image 
          src={'https:' + thumbnail.fields.file.url}
          width={thumbnail.fields.file.details.image.width}
          height={thumbnail.fields.file.details.image.height}
        />
      </div>
      <div className="content">
        <div className="info">
          <h4>{ title }</h4>
          <p>Rs: { price }</p>
        </div>
        <div className="actions">
          <Link href={'/recipes/' + slug}>Buy This!</Link>
        </div>
      </div> 

      
      </div>
    
  )
}