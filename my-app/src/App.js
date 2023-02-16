import "./App.scss";
import Header from "./components/header";
import SideBar from "./components/sidebar";
import Footer from "./components/footer";
import css from "./assets/img/css-icon.svg";
import html from "./assets/img/html-icon.svg";
import url from "./assets/img/url-icon.svg";

function App() {
  return (
    <div className="App">
      <div className="container">
        <SideBar />
        <div className="content">
          <Header />
          <div className="section1">
            <p className="section1-title">Lorem ipsum dolor sit asmet?</p>
            <p className="section1-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tristique consequat placerat. Vestibulum auctor pellentesque sem,
              eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam
              facilisis, ligula in mattis sodales, augue justo tristique nulla,
              sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel
              mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend
              convallis. Quisque suscipit maximus vestibulum. Phasellus congue
              mollis orci, sit amet luctus augue tristique eu. Donec vulputate
              odio neque, sed semper turpis pellentesque a.
            </p>
          </div>
          <div className="section2">
            <div>
              <p className="section2-title">Lorem ipsum dolor sit asmet?</p>
              <div className="section2-text">
                <img src={css} alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  non dui sodales, faucibus libero ut, posuere felis. Donec
                  imperdiet suscipit accumsan. Aenean consequat condimentum
                  velit ut tempor. Nam porta massa in metus bibendum congue.
                  Pellentesque ultrices liquam egestas nunc at ullamcorper
                  ultricies. Donec feugiat velit nulla, vel sodales est
                  ullamcorper id. Aenean consequat condimentum velit ut tempor.
                  Nam porta massa in metus bibendum congue. Pellentesque
                  ultrices vestibulum mattis.
                </p>
              </div>
            </div>
            <div>
              <p className="section2-title">Lorem ipsum dolor sit asmet?</p>
              <div className="section2-text">
                <img src={html} alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  non dui sodales, faucibus libero ut, posuere felis. Donec
                  imperdiet suscipit accumsan. Aenean consequat condimentum
                  velit ut tempor. Nam porta massa in metus bibendum congue.
                  Pellentesque ultrices liquam egestas nunc at ullamcorper
                  ultricies. Donec feugiat velit nulla, vel sodales est
                  ullamcorper id. Aenean consequat condimentum velit ut tempor.
                  Nam porta massa in metus bibendum congue. Pellentesque
                  ultrices vestibulum mattis.
                </p>
              </div>
            </div>
            <div>
              <p className="section2-title">Lorem ipsum dolor sit asmet?</p>
              <div className="section2-text">
                <img src={url} alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  non dui sodales, faucibus libero ut, posuere felis. Donec
                  imperdiet suscipit accumsan. Aenean consequat condimentum
                  velit ut tempor. Nam porta massa in metus bibendum congue.
                  Pellentesque ultrices liquam egestas nunc at ullamcorper
                  ultricies. Donec feugiat velit nulla, vel sodales est
                  ullamcorper id. Aenean consequat condimentum velit ut tempor.
                  Nam porta massa in metus bibendum congue. Pellentesque
                  ultrices vestibulum mattis.
                </p>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
