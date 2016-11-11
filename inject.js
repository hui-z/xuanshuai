~(function() {
    console.log('shuaifeitian');
    let div = document.createElement('div');
    div.classList.add('inject-container');
    div.innerHTML = `<div class="">
        <span id="close">x</span>
        <div class="line">
            <input id="field-name" placeholder="字段名(小写、下划线)" />
        </div>
        <div class="line">
            <input id="to-be-selected" placeholder="要选择的值" />
        </div>
        <div class="line"><button id="confirm-select">确定</button></div>
    </div>`;
    document.body.appendChild(div);

    let fieldName = document.getElementById('field-name');
    let toBeSelected = document.getElementById('to-be-selected');

    let closeIcon = document.getElementById('close');
    let confirmButton = document.getElementById('confirm-select');

    closeIcon.addEventListener('click', function() {
        document.body.removeChild(div);
    });

    confirmButton.addEventListener('click', function() {
        let field = fieldName.value;
        let content = toBeSelected.value;
        if (!field || !content) {
            alert('你不填我怎么选？');
            return;
        }

        let selector = getSelector(field);
        let opt = getOptionIn(selector, content);
        if (!opt) {
            alert('没找到');
            return;
        }

        opt.setAttribute('selected', true);

    });

    function getSelector(field) {
        return `#id_${field} > option`;
    }

    function getOptionIn(selector, content) {
        let options = document.querySelectorAll(selector);
        options = Array.from(options);
        let opt = options.find(i => i.textContent === content);
        return opt;
    }
})()
