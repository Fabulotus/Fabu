function reset(){
    for(var i=0;i<9;i++){
        ce=document.getElementById(i+1);     
            ce.style.display='block';
            }

}
function red() {
    document.getElementById('blue').checked=false;
    document.getElementById('green').checked=false;
   filter();
}
function green() {
    document.getElementById('blue').checked=false;
    document.getElementById('red').checked=false;
 filter();
}
function blue() {
    document.getElementById('red').checked=false;
    document.getElementById('green').checked=false;
 filter();
}
function hero() {
    document.getElementById('creep').checked=false;
    document.getElementById('spell').checked=false;
 filter();
}
function creep() {
    document.getElementById('spell').checked=false;
    document.getElementById('hero').checked=false;
 filter();
}
function spell() {
    document.getElementById('hero').checked=false;
    document.getElementById('creep').checked=false;
 filter();
}
function filter(){
    reset();
    if(document.getElementById('red').checked) {
        var ce;
    for(var i=0;i<9;i++){
        ce=document.getElementById(i+1);
        if (!ce.className.includes('red')){
            ce.style.display='none';
        }
    }}
    if(document.getElementById('green').checked) {
        var ce;
    for(var i=0;i<9;i++){
        ce=document.getElementById(i+1);
        if (!ce.className.includes('green')){
            ce.style.display='none';
        }
    }}
    if(document.getElementById('blue').checked) {
        var ce;
    for(var i=0;i<9;i++){
        ce=document.getElementById(i+1);
        if (!ce.className.includes('blue')){
            ce.style.display='none';
        }
    }}
    if(document.getElementById('hero').checked) {
        var ce;
    for(var i=0;i<9;i++){
        ce=document.getElementById(i+1);
        if (!ce.className.includes('hero')){
            ce.style.display='none';
        }
    }}
    if(document.getElementById('creep').checked) {
        var ce;
    for(var i=0;i<9;i++){
        ce=document.getElementById(i+1);
        if (!ce.className.includes('creep')){
            ce.style.display='none';
        }
    }}
    if(document.getElementById('spell').checked) {
        var ce;
    for(var i=0;i<9;i++){
        ce=document.getElementById(i+1);
        if (!ce.className.includes('spell')){
            ce.style.display='none';
        }
    }}
}