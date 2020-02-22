import React, { Children} from "react";

export class ContextProcessor extends React.Component {
  constructor(props) {
    super(props);
  }

  abstraction() {
    let content = "";


    Children.map(this.props.children, (child) => {
      switch (typeof child) {
        case 'string':
          content += child
        case 'object':
          return

        default:
          return
      }
    })

    let sections = content.split(/\[.*?(?: .+?)?\]/)

    sections.forEach((elm) => {
      console.log("@@@@@@@@@ [ SECTION ] @@@@@@@@@")
      console.log(elm)
    })
    try {
      content.match(/\[.*?(?: .+?)?\]/g).forEach((val) => {
        switch (val) {
          case "youtube":
            this.youtube()
            break;
        }
      })
    }
    catch (e) {
      console.log(e)
    }
    
  }

  youtube(code) {
    let playback = "https://www.youtube.com/embed/" + code.split("id=\"")[1].split("\"")[0]

    alert("A")
    return (
      <iframe width="100%" height="470" src={playback} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    );
  }

  apple() {

  }

  sound() {

  }

  render() {
    this.abstraction()

    return (
      <>
        { this.props.children }
      </>
    )
  }
}
