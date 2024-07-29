function fn()
{
    if(document.getElementById("bg-body").getAttribute('class')=='bg-light'){
        document.getElementById("bg-body").setAttribute('class','bg-dark');
        document.getElementById("bt").setAttribute('value','Light Mode');
    }
    else{
        document.getElementById("bg-body").setAttribute('class','bg-light');
        document.getElementById("bt").setAttribute('value','Dark Mode');
        
    }
}
const s=document.createElement('h1').innerHTML="SRIKAR";