export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fbd0a534527ee00ea11d032',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-n6jhht3n',
                  apiId: 'b8f34567-b178-42e6-a477-0211dc6a3314'
                },
                {
                  buildHookId: '5fbd0a535c23450119c21389',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-2ov8w1mm',
                  apiId: '0e8f2197-e865-4459-94be-0da3bc403830'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JSJS2000/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-2ov8w1mm.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
