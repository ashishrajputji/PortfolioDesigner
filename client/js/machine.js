var machineWeight = 3500;
calculateTime(machineWeight);

function calculateTime(n)
{
 if(n==0){
    console.log("Time Estimated : 0 Minutes");
    return 0;
 }
 else if(n>0 && n<=2000) {
    console.log("Time Estimated : 25 Minutes");
    return 25;
} 
 else if(n>2000 && n<=4000) {
    console("Time Estimated : 35 Minutes");
    return 35;  
 }
 else if(n>4000 && n<=7000){
     console.log("Time Estimated : 45 Minutes");
     return 45;
}
 else
     console.log("INVALID INPUT");
     return "INVALID INPUT";
}



