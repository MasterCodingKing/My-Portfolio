document.addEventListener('DOMContentLoaded', () => {
   let list_item_1 = document.querySelector('.list-title-1')
   let list_item_2 = document.querySelector('.list-title-2')
   let list_item_3 = document.querySelector('.list-title-3')

   
   let list_group_1 = document.querySelector('.list-group-1')
   let list_group_2 = document.querySelector('.list-group-2')
   let list_group_3 = document.querySelector('.list-group-3')

   list_item_1.addEventListener('mouseover', ()=>{
        list_group_1.style.display = "block";
        
   })
   list_item_1.addEventListener('mouseout', ()=>{
    list_group_1.style.display = "none";
   })
   list_item_2.addEventListener('mouseover', ()=>{
    list_group_2.style.display = "block"
   })
   list_item_2.addEventListener('mouseout', ()=>{
    list_group_2.style.display = "none"
   })
   list_item_3.addEventListener('mouseover', ()=>{
    list_group_3.style.display = "block"
   })
   list_item_3.addEventListener('mouseout', ()=>{
    list_group_3.style.display = "none"
   })

   let services = document.querySelectorAll('#services');
   services.forEach(serv => {
      serv.addEventListener('mouseover', () =>{
         serv.style.background = 'red';
         serv.style.color = '#ffffff'
      })
      serv.addEventListener('mouseout', () =>{
         serv.style.background = 'none';
         serv.style.color = '#ffffff'
      })
   })


});
