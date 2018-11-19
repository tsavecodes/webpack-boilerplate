var App = {
  init() {
    this.cache();
    this.bind();
    this.run();
  },
  cache() {
    this.dom = {};
    this.dom.body = document.body;
  },
  bind() {
    window.onresize = () => {
      this.resize();
    };
  },
  resize() {
    console.log("resize");
  },
  run() {
    console.log("hello");
  }
};

export default App;
