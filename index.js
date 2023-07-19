
var error;

function checkname(){
   const empname=document.getElementById('empname').value

   if(empname.trim()==false){
      alert("Enter employee name");
   }
   
   else if(empname.length<2){
      alert("Enter name properly")
   }
}

function checkcode(){

   const empcode=document.getElementById('empcode').value;

   if(empcode.trim()==false){
      alert("Enter empcode")
   }
}

function checkboth(){

   const empname=document.getElementById('empname').value
   const empcode=document.getElementById('empcode').value

   if(empname.trim()==false){
      alert("Enter empname")
   }

   if(empcode.trim()==false){
      alert("Enter empcode")
   }

}

function timefun(){

   let shleave=document.getElementById('shleave')
   let time=document.getElementById('time')
   let starttime=document.getElementById('starttime');
   let endtime=document.getElementById('endtime');
    
if(shleave.checked){
time.style.display='block'

starttime.value=null;
endtime.value=null;
}

}

function hidediv(){
    let time=document.getElementById('time')
    time.style.display='none'
}

function checkDep(){

   const department=document.getElementById('department')

   if(department.value){
      return true
   }
   else{
      alert("Please choose the department")
   }

}

function validateDays(){
   let numberofdays=document.getElementById('numberofdays').value

   if(numberofdays.trim()==false){
     
      alert("Enter no of days ")
      fromdate.value="";
      todate.value=""
   }

}

function disabledate(){

   let todate=document.getElementById('todate')
   let fromdate=document.getElementById('fromdate')

   todate.value=null;
   fromdate.value=null;

}

function getfromdate(){

     let numberofdays=document.getElementById('numberofdays').value
     let todate=document.getElementById('todate')
     let fromdate=document.getElementById('fromdate')
    
     if(numberofdays.trim()==false){
     
        alert("Enter no of days ")
        fromdate.value="";
        todate.value=""
     }

     else{
        const date1=new Date(fromdate.value)
    
        const date2=new Date(date1.setDate(date1.getDate()+(+Math.round(numberofdays)-1.0)))
    
        let todate=document.getElementById('todate')
        todate.value=date2.toISOString().slice(0,10);
     }
     
}

function checkradio(){

   const checkradio=document.getElementsByName('leave');

   for (let i = 0; i < checkradio.length; i++) {
   if (checkradio[i].checked){
      return true;  
}
}
error=1;
    return alert("aleast choose any type of leave");
    
}

function validatestarttime(){

   let starttime=document.getElementById('starttime');

   if(starttime.value){
     return true;
   }
   else{
      alert("Please select start time");
   }
   
}

function validatendtime(){

   let starttime=document.getElementById('starttime');
   let endtime=document.getElementById('endtime');
   

   const starttimeint=parseInt(starttime.value);
   const endtimeint=parseInt(endtime.value)

   if((endtimeint-starttimeint)<1){
      endtime.value=null
      alert("aleast select 1 hour time gap")
   }

}

function checktime(){

   let starttime=document.getElementById('starttime');
   let endtime=document.getElementById('endtime');
   let shleave=document.getElementById('shleave')

   if(error==1){
      error=0;
   }
   else{
      if(shleave.checked){
         if(starttime.value){

            if(endtime.value){
             return true
            }
            else{
             alert("Please slect endtime")
            }
          }
          else{
             alert("please select starttime")
          }
      }
      
   }

}
                            



const form=document.getElementById('form');


form.addEventListener('submit',(e)=>{

   e.preventDefault();

   var empname=document.getElementById('empname')
   var empcode=document.getElementById('empcode')
   var department=document.getElementById('department')

   var ele = document.getElementsByName('leave');

   let timediv=document.getElementById('time')
 
   // console.log(empname.toUpperCase())
   // console.log(empcode)
   // console.log(department)
   // console.log(numberofdays.value)
   // console.log(fromdate.value)
   // console.log(todate.value)

   for (i = 0; i < ele.length; i++) {
      if (ele[i].checked){
        // console.log(ele[i].value)
        var radiobtn=ele[i]
      }
   }

   if(shleave.checked){
      // console.log(starttime.value);
      // console.log(endtime.value);

      var fromtime=starttime
      var totime=endtime
   }

   var reason=document.getElementById('message');
   //console.log(reason);

   if(empname.value && empcode.value && department.value && numberofdays.value
      && fromdate.value && todate.value && radiobtn &&  reason){
         alert(`Your form is submitted succesfully`)

         empname.value="";
         empcode.value="";
         department.value="";
         numberofdays.value=null;
         fromdate.value=null;
         todate.value=null;
         radiobtn.checked=false;
         reason.value="";

         timediv.style.display='none';
      }
   else{
      alert("Please fill all the fields")

      console.log(empname)

   }
})







    



