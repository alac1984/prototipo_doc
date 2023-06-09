let render_frame = document.getElementById('render-frame');
render_frame.onload = () => {
    let biz_wrapper = render_frame.contentWindow.document.getElementsByClassName('biz-ex-wrapper');
    biz_wrapper[0].style.backgroundColor = '#fafafa';
    biz_wrapper[0].style.border = '0';
    biz_wrapper[0].style.padding = '20px';
};
