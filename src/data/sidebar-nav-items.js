export default function () {
    return [{
      title: 'Blog Dashboard',
      to: {
        name: 'blog-overview',
      },
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: '',
    }, {
      title: 'Forms & Components',
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: {
        name: 'components-overview',
      },
    }, {
      title: 'User Lists',
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: {
        name: 'user-lists',
        query: {
          c: "All",
        },
      },
    }, {
      title: 'Business Lists',
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: {
        name: 'business-lists',
        query: {
          c: "Company",
        },
      },
    }
  ]}
  