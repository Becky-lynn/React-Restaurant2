export default function MenuItemPreview(props) {
    return(
   <>
   <div className="row menu-item-preview">
      <div className="col-sm-4 col-md-6 col-lg-4">
	    <img src={props.image} alt={props.name} />
	  </div>

      <div className="col-sm-2 col-md-2 col-lg-2">
        <h3>{props.name}</h3>
        <p>{props.description }</p>
        <a href="products.html" class="btn btn-primary">Product Details</a>
      </div>

      <div className="col-sm-3 col-md-2 col-lg-3 recipe">
        <ul dangerouslySetInnerHTML={{ __html: props.recipe}}></ul>
      </div>

      <div className="col-sm-3 col md-2 col lg-3 recipe">
       <ol dangerouslySetInnerHTML={{__html: props.directions}}></ol>
      </div>

    </div>
    </>
  )
}