function ageinDays(){
    var birthyear=prompt('What Year Were You Born My Friend?......');
    var ageinDays=(2022-birthyear)*365;
    var h1=document.createElement('h1');
    var textanswer=document.createTextNode('You Are ' + ageinDays+ ' Days Old');
    h1.setAttribute('id','ageinDays');
    h1.appendChild(textanswer);
    document.getElementById('flex-box-result').appendChild(h1);
}
function reset(){
    document.getElementById('ageinDays').remove();
}