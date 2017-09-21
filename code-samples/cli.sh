# sample(model)
$ ember generate model product

installing model
  create app/models/product.js
installing model-test
  create tests/unit/models/product-test.js
# end-sample

# sample(route)
$ ember generate route products

installing route
  create app/routes/products.js
  create app/templates/products.hbs
updating router
  add route products
installing route-test
  create tests/unit/routes/products-test.js
# end-sample

# sample(install-mirage)
$ ember install ember-cli-mirage
# end-sample

# sample(new-project)
$ ember new my-awesome-ember-app
# end-sample

# sample(tree)
$ tree -L 2 .
├── README.md
├── app
│   ├── app.js
│   ├── components
│   ├── controllers
│   ├── helpers
│   ├── index.html
│   ├── models
│   ├── resolver.js
│   ├── router.js
│   ├── routes
│   ├── styles
│   └── templates
├── config
├── ember-cli-build.js
├── package.json
├── public
├── testem.js
├── tests
└── vendor
# end-sample
