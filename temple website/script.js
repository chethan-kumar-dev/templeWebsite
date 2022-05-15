window.onload=function(){
   const table=document.getElementById('event-table')

   fetch("http://templeevents-4fbac-default-rtdb.firebaseio.com/events.json")
   .then(res=>res.json())
   .then(data=>{
      for(let dat in data){
         row=table.insertRow(1);
         c1=row.insertCell(0);
         c2=row.insertCell(1);
         c3=row.insertCell(2);
         p1=document.createElement('p');
         p2=document.createElement('p');
         p3=document.createElement('p');

         p1.innerHTML=data[dat].date;
         p2.innerHTML=data[dat].textarea;
         p3.innerHTML=data[dat].time;
         c1.appendChild(p1);
         c2.appendChild(p2);
         c3.appendChild(p3)
      }
   })
}