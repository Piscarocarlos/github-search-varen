import "bootstrap/dist/css/bootstrap.min.css"
import "./css/style.css"
import $ from "jquery"

// $('p').hide();

$("button").on("click", () => {
 $('div').append("<p>Varen</p>")
})

window.addEventListener("scroll", () => {
  console.log(document.documentElement.scrollTop);
})




// let app = document.getElementById('app');

// app.innerHTML = `
//     <div class="container">
//         <div class="row">
//           <div class="col-md-6 offset-md-3 mt-5">
//             <div class="card rounded-0">
//               <div class="card-header">
//                 <h5 class="mb-0 card-title">Github Search</h5>
//               </div>
//               <div class="card-body">
//                 <form>
//                   <div class="input-group">
//                     <input type="search" id="username" class="form-control" placeholder="john_doe">
//                     <button class="btn btn-dark" disabled>Search User Profile</button>
//                   </div>
//                 </form>
//               </div>
//               <div class="d-flex justify-content-center">
//                 <div class="spinner-border" role="status" style="display:none">
//                     <span class="visually-hidden">Loading...</span>
//                 </div>
//               </div>
//               <div class="card-footer" id="response">
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
// `

// let ipt = document.querySelector("#username");

