# Dynamic, Reactive Code Samples

This repository hosts a demo of the work that I did to implement 'Dynamic/Reactive Code Samples' for JavaScript SDKs, while working as a Software Engineer at [APIMatic](https://apimatic.io). 

Below, I talk about the story behind this specific project, explaining why this project was particularly important. I highly recommend that you read it through, however if you are short on time, please feel free to [skip through and dive into the technical details](#what-are-reactive-code-samples) or [see the detailed example](#an-example-template-for-code-sample).

## Why dynamic code samples

Documenting an API is just as important as designing and implementing it. A well designed API, which is implemented in a well-structured way is not going to be used unless it has great documentation which makes it easy for developers to actually consume it in their code. This is why it is considered a norm to have code samples in different languages and platforms within the documentation to make it easier for developers to use the API.

## How this is related to APIMatic

APIMatic is a 'Developer Experience Platform'. Which means that the platform provides tools which make it easier for developers to consume APIs. Initially APIMatic started as a SaaS business, providing automatically generated SDKs for APIs (anyone could generate an SDK for their API in different languages instead of writing one themselves from scratch).

This soon evolved into provision of a complete developer experience. And hence, automatically generated developer portals, which contained full **API documentation**, along with **code samples** were created. So, this project was **an attempt to make the code samples even more interactive and 'copy-paste ready' for developers using the APIs**.

## What are reactive code samples

Reactive code samples are simply code samples that change with user input. They are interactive code samples which change automatically as soon as some user input (which was being used in the code sample) changes.
For example, take the following snippet:

```js
var x = 5;
```

Here `5` is a user input. The user can change it to any other value. And when they do, the code sample will automatically change to:

```js
var x = {{ user input }};
```

So essentially, this means that these code snippets have the ability to dynamically modify themselves on the fly, when certain 'user inputs' change.

Keep reading for details on how this behavior was achieved and for an elaborate example which explains the concept better.

## How reactive code samples were created

Reactive code samples were built primarily using [Liquid Templating Language](https://shopify.github.io/liquid/). There were 2 main parts in play:

* The Template (for the code structure)
* The Data (the user input)

The template is created in `Liquid`. For the data, a JSON file is generated at runtime which contains the user input (as specified in the API description, in case it is not specified, default values are rendered).  
This data (user input) can be changed by anyone looking at the code sample. However, this is only possible in the code editor (a program which renders the finished code by merging the templates with the data provided). My work was not related to the code editor, however (it was to create the templates for code samples of Node.js & AngularJS SDKs).

### An example template (for code sample)

I have created a sample API for this demo. You can check out its documentation [over here](https://apimatic.io/apidocs/emojis/v/1_0#/node-js/getting-started). The SDK for consuming this API in Node.js is available in this repository (generated from APIMatic's CodeGen engine). The readme in the SDK project explains how to use the SDK (including code snippets for calling the `/emoji` endpoint) so I won't get into the details for that here. Let's see an example template for rendering a code sample to consume the `/emoji` route of the API:

```
{% if data["optionalQueryParams"] != nil %}
    let queryParameters = {{ '{' }}
        {% for this in data["optionalQueryParams"] %}
            '{{ this[0] }}': {% if this[1] != nil %}'{{ this[1] }}' {% else %} '' {% endif %}
                {% unless forloop.last %}
                    , 
                {% endunless %}
        {% endfor %}
    };
{% endif %}

    const promise = controller.getEmoji(
        {% if data["optionalQueryParams"] != nil %}
            queryParameters
        {% else %}
            null
        {% endif %}
    );
    promise.then((response) => {
        // this block will be executed on successful endpoint call
        // `response` will be of type 'string'
    }, (err) => {
        // this block will be executed on endpoint call failure
        // `err` is an 'object' containing more information about the error
    }
```

This template will use the following data from the json file (as input values):

* data["optionalQueryParams"]

The rendered code sample will look something like this provided that `data["optionalQueryParams"]` is an array like: `[ [key, value] ]`

```js
let queryParameters = { 'key': 'value' };

const promise = controller.getEmoji(queryParameters);
promise.then((response) => {
    // this block will be executed on successful endpoint call
    // `response` will be of type 'string'
}, (err) => {
    // this block will be executed on endpoint call failure
    // `err` is an 'object' containing more information about the error
});
```

If the values inside `data["optionalQueryParams"]` are changed through the code editor, the code sample shown above will also change. Let's say we change `data["optionalQueryParams"]` to `[ ['dialog1', 'May the force be with you'], ['dialog2', 'Anger leads to hatred, hatred leads to the dark side'] ]`, the code sample will change to:

```js
let queryParameters = {
	'dialog1': 'May the force be with you',
	'dialog2': 'Anger leads to hatred, hatred leads to the dark side'
};

const promise = controller.getEmoji(queryParameters);
promise.then((response) => {
    // this block will be executed on successful endpoint call
    // `response` will be of type 'string'
}, (err) => {
    // this block will be executed on endpoint call failure
    // `err` is an 'object' containing more information about the error
});
```

You can see this live in action as well. Please head on over to [the hosted portal](https://apimatic.io/apidocs/emojis/v/1_0#/node-js/api-endpoints/api-controller/get-emoji) for this API. You can see the code sample on the right pane and play around with the inputs to the code from the left pane (as pictured below). Additionally, you can also make live calls to the API to see the response.

![live code sample gif]()

Have fun. And please let me know if you have any questions regarding this 😄

**Note:** _The example taken is very simple to make it easier to explain and understand. Feel free to generate portals for other APIs which take complex inputs and play around with the inputs to see the code samples change & see the full power of `Reactive Code Samples`_