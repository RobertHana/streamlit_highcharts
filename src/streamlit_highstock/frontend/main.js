function sendValue(value) {
  Streamlit.setComponentValue(value)
}


function onRender(event) {
  if (true) {
    const {options,height} = event.detail.args
    if (options.global_options)
        Highcharts.setOptions(options.global_options);
    Streamlit.setFrameHeight(height+20)
    document.getElementById("container").style.height=height+"px"
    Highcharts.stockChart('container', options.chart_options);
    window.rendered = true
  }
}

Streamlit.events.addEventListener(Streamlit.RENDER_EVENT, onRender)
Streamlit.setComponentReady()
