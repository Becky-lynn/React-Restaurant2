//import header . is within components
import Header from "../components/header.js"
import Footer from "../components/footer.js"
import MenuItemPreview from "../components/menuItemPreview.js"
//function name matches file name but is uppercase
export default function Home() {

    const mainCourse = [
        {
            "name": "Turkey",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS79KrVVK3KdtQqlifLruiYKMLdBOC3ZCCRHQ&amp;usqp=CAU",
            "description": "Our turkey is roasted to perfection. The top is braised with butter for a crisp golden-brown skin."
        }
    ];

    const sides = [
        {
            "name": "Cornbread Dressing",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSFsz0QsXcIEJ9OBG9YYhNZnGa20C_1SVUaLA&usqp=CAU",
            "description": "Cornbread and bread stuffing mixed together with chicken broth and just enough sage."
        },
        {
            "name": "Sweet Potatoe Casserole",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR9hg50zHDoV0jKOJSu0DNL3xuUVr-Glku_jg&usqp=CAU",
            "description": "Whipped Sweet Potatoes with a pecan and brown sugar topping."
            },
            {
             "name": "Arkansas Green Beans",
             "image": "https://thewanderlustkitchen.com/wp-content/uploads/2019/08/Bacon-and-Brown-Sugar-Arkansas-Green-Beans-1.jpg",  
             "description": "These beans are full of flavor. I just had to share the recipe.",
             "recipe": 
             `<ul>
                <li>16oz bag of frozen green beans</li>
                <li>6 slices of bacon</li>
                <li>1/3 cup paked brown sugar</li>
                <li>1/4 cup salted butter melted</li>
                <li>3 teaspoons soy sauce</li>
                <li>2 cloves of garlic</li>
             </ul>`,
             "directions": 
             `<ol>
                <li>Preheat oven to 350&deg.</li>
                <li>Drain the beans and place 9 by 9 glass dish.</li>
                <li>Cook bacaon and place on paper towel to cool</li>
                <li>Once bacon is cool crumble and sprinkle over beans</li>
                <li>In small bowl stir together butter, brown sugar, soy sauce and garlic</li>
                <li>Drizzle the mixture over beans and bacon.</li>
                <li>Bake uncovered for 30 mintues.</li>
            </ol>`
            },
            {
             "name": "Homemade Yeast Rolls",
             "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTMGX4EVGN6B5xyYPELqkeUEcD6hoWE6emrw&usqp=CAU",
             "description": "My mom's rolls never dissapoint"
                }
    ];
    const desserts = [
        {
            "name": "Pie",
            "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ1_Xj0qlHHnDIRD5dSk32vE4-DrV3U-00Cug&usqp=CAU",
            "description": "Homemade Pumpkin Pie with a dollop of whip cream."
        }
    ];
   return (
       <>
       <Header></Header>
       
       <div className="container">
           <div className="row">
               <div className="col-sm-12 intro">
                   <h1>Are you hosting this years holiday dinner?</h1>
                   <p>
                       Preparing a Thanksgiving feast can be very stressful. We want to help make your holiday more enjoyable. <br/> Let us do all the heavy cooking so you can spend more time with your family and friends. 
                   </p>
               </div>
               <div className="col-sm-12">
                   <h2>Main Course</h2>
                   {mainCourse.map((item)=> {
                    return <MenuItemPreview name={item.name} image={item.image} description={item.description}></MenuItemPreview>

                   })}

                   <h2>Plenty of Delishious Sides</h2>
                    {sides.map((item) => {
                        return <MenuItemPreview name={item.name} image={item.image} description={item.description} recipe={item.recipe} directions={item.directions}></MenuItemPreview>
                    })}
                   <h2>For Desert</h2>
                    {desserts.map((item) => {
                        return <MenuItemPreview name={item.name} image={item.image} description={item.description}></MenuItemPreview>
                    })}
               </div>
           </div>
       </div>

       <Footer></Footer>
       </>
   )    
}