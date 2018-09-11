function reset(){
    document.getElementById('blue').disabled=false;
    document.getElementById('green').disabled=false;
    document.getElementById('red').disabled=false;
    document.getElementById('creep').disabled=false;
    document.getElementById('hero').disabled=false;
    document.getElementById('spell').disabled=false;
    for(var i=0;i<9;i++){
        ce=document.getElementById(i+1);     
            ce.style.display='block';
            }

}
function red() {
    if(document.getElementById('red').checked) {reset(); break;}
   filter();
}
function green() {
 filter();
}
function blue() {
 filter();
}
function hero() {
 filter();
}
function creep() {
 filter();
}
function spell() {
 filter();
}
function filter(){
    reset();
    if(document.getElementById('red').checked) {
        document.getElementById('blue').disabled=true;
        document.getElementById('green').disabled=true;
        var ce;
    for(var i=0;i<9;i++){
        ce=document.getElementById(i+1);
        if (!ce.className.includes('red')){
            ce.style.display='none';
        }
    }}
    if(document.getElementById('green').checked) {
        document.getElementById('blue').disabled=true;
        document.getElementById('red').disabled=true;
        var ce;
    for(var i=0;i<9;i++){
        ce=document.getElementById(i+1);
        if (!ce.className.includes('green')){
            ce.style.display='none';
        }
    }}
    if(document.getElementById('blue').checked) {
        document.getElementById('red').disabled=true;
        document.getElementById('green').disabled=true;
        var ce;
    for(var i=0;i<9;i++){
        ce=document.getElementById(i+1);
        if (!ce.className.includes('blue')){
            ce.style.display='none';
        }
    }}
    if(document.getElementById('hero').checked) {
        document.getElementById('creep').disabled=true;
        document.getElementById('spell').disabled=true;
        var ce;
    for(var i=0;i<9;i++){
        ce=document.getElementById(i+1);
        if (!ce.className.includes('hero')){
            ce.style.display='none';
        }
    }}
    if(document.getElementById('creep').checked) {
        document.getElementById('hero').disabled=true;
        document.getElementById('spell').disabled=true;
        var ce;
    for(var i=0;i<9;i++){
        ce=document.getElementById(i+1);
        if (!ce.className.includes('creep')){
            ce.style.display='none';
        }
    }}
    if(document.getElementById('spell').checked) {
        document.getElementById('hero').disabled=true;
        document.getElementById('creep').disabled=true;
        var ce;
    for(var i=0;i<9;i++){
        ce=document.getElementById(i+1);
        if (!ce.className.includes('spell')){
            ce.style.display='none';
        }
    }}
}