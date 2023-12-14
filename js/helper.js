const form = document.getElementById("form1")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
   const  name = document.getElementById("name").value;
   const  email = document.getElementById("email").value;
   const  foodCategory = document.getElementById("foodCategory").value;
   const  foodName = document.getElementById("foodName").value;
   const  qty = document.getElementById("foodQuantity").value;
   const  phoneNumber = document.getElementById("phoneNumber").value;
   const  address = document.getElementById("address").value;
})