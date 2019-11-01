var ajax = new XMLHttpRequest();
        ajax.open('GET', 'content.html');
        ajax.onreadystatechange = function() {
            if (ajax.readyState = 4) {
                document.getElementById('content').innerHTML = ajax.responseText;
            }
        }
		function getContent() {
            ajax.send();
            document.getElementById('btn_content').style.display = 'none';
        }