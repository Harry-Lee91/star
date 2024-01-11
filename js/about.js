function lastOpen(){
    document.getElementById('last-img').style.display = 'flex';
    document.getElementById('open').style.display = 'none';
    document.getElementById('close').style.display = 'block';
    document.getElementById('last-sub').style.display = 'grid';
}

function lastClose(){
    document.getElementById('last-img').style.display = 'none';
    document.getElementById('open').style.display = 'block';
    document.getElementById('close').style.display = 'none';
    document.getElementById('last-sub').style.display = 'none';
}

