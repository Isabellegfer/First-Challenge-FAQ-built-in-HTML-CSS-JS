var p1 = document.getElementById('p1')
var p2 = document.getElementById('p2')
var p3 = document.getElementById('p3')
var p4 = document.getElementById('p4')
var p5 = document.getElementById('p5')

function clicar1(){
    p1.innerHTML='You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.'
    p2.innerHTML=''
    p3.innerHTML=''
    p4.innerHTML=''
    p5.innerHTML=''
}
function clicar2(){
    p2.innerHTML='No more than 2GB. All files in your account must fit your allotted storage space.'
    p1.innerHTML=''
    p3.innerHTML=''
    p4.innerHTML=''
    p5.innerHTML=''
}
function clicar3(){
    p3.innerHTML='Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.'    
    p2.innerHTML=''
    p1.innerHTML=''
    p4.innerHTML=''
    p5.innerHTML=''
}
function clicar4(){
    p4.innerHTML='Yes! Send us a message and we’ll process your request no questions asked.'
    p2.innerHTML=''
    p3.innerHTML=''
    p1.innerHTML=''
    p5.innerHTML=''
}
function clicar5(){
    p5.innerHTML='Chat and email support is available 24/7. Phone lines are open during normal business hours.'
    p2.innerHTML=''
    p3.innerHTML=''
    p4.innerHTML=''
    p1.innerHTML=''
}