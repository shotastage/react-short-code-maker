

# react-short-code-maker

> > THIS SOFTWARE IS NOW UNDER CONSTRUCTION!

WordPress like short-code maker for React.js





## Basic Usage

You can write short-code like this.

```jsx
return (
  <p>
		Here is an movie for explaining how to install Ubuntu into MacBook.
    
    [youtube id="kRgKlcm1XPI"]
    
    Following, this movie....
	</p>
);
```



This code will render shown below.

```jsx
return (
  <p>
		Here is an movie for explaining how to install Ubuntu into MacBook.
    
    <iframe width="100%" height="470" src="https://www.youtube.com/embed/kRgKlcm1XPI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    Following, this movie....
	</p>
);
```





## Why use short-code in React component.

In API-based single page application, the content - such as blog - is received as JSON structure.

If you receive HTML as a string from JSON struct, React can not render raw HTML string without dangerouslySetInnerHTML.

`dangerouslySetInnerHTML` may causes XSS vulnerability in your Web-application. However, some widget such as embeded YouTube `<iframe>` must have as HTML syntax.

Thus, in react-short-code-maker, these `<iframe>` widgets are represented as **short-code** like WordPress like syntax such as `[youtube id="kRgKlcm1XPI"]`.

These short-code will safely render as React component without XSS vulnerability.

