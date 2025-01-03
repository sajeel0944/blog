import {defineType, defineField} from 'sanity'



export default defineType({
  name:"blog",
  type:"document",
  title:"create blog",
  fields:[
    defineField({
      name:"title",
      type:"string",
      title:"Title",
      placeholder:"Title",
      validation: (only:any)=> only.max(45).error("only 45 word allow")
    }),
      defineField({
      name:"categories",
      type:"string",
      title:"Categories",
      placeholder:"categories",
      options:{
        list:[
          {title:"Technology",value:"Technology"},
                {title:"Lifestyle",value:"Lifestyle"},
                {title:"Education",value:"Education"},
                {title:"Food and Recipes",value:"Food and Recipes"},
                {title:"Finance",value:"Finance"},
                {title:"Entertainment",value:"Entertainment"},
                {title:"Travel",value:"Travel"},
                {title:"Business and Marketing",value:"Business and Marketing"},
                {title:"Personal Blogging",value:"Personal Blogging"},
                {title:"Science and Environment",value:"Science and Environment"},
        ],
        layout:"dropdown",
        direction:"horizontal"
      }
    }),
    defineField({
      name:"name",
      type:"string",
      title:"Name",
      placeholder:"Name",
      validation:(state:any)=>{ return state.max(20).error("only 20 word is allow");},
    }),
    defineField(
      {
        title: 'Profile ',
        name: 'poster',
        type: 'image',
        options: {
          hotspot: true 
        },
      }),
      defineField({
        name:"Date",
        title:"Date",
        type:"date",
        placeholder:"DD/MM/YY"
      }),
      defineField({
        name:"blogimage",
        type:"image",
        title:"Blog Image",
        options:{
          hotspot:true
        }
      }),
      defineField(
        {
          title: 'Content', 
          name: 'content',
          type: 'array', 
          validation:(warn:any)=>{return warn.min(500).warning("5 hading is import")},
          of: [{type: 'block'}]
        }
      ),
      defineField({
          title: 'Facebook Link',
          name: 'facebook',
          type: 'url',
          placeholder:"Facebook Link",
          validation: Rule => Rule.uri({
            scheme: ['http', 'https', 'mailto', 'tel']
          })
        }),
        defineField({
          title: 'Twitter Link',
          name: 'twitter',
          type: 'url',
          placeholder:"Twitter Link",
          validation: Rule => Rule.uri({
            scheme: ['http', 'https', 'mailto', 'tel']
          })
        }),
        defineField({
          title: 'Instagram Link',
          name: 'instagram',
          type: 'url',
          placeholder:"Instagram Link",
          validation: Rule => Rule.uri({
            scheme: ['http', 'https', 'mailto', 'tel']
          })
        }),
        defineField({
          title: 'Youtube Link',
          name: 'youtube',
          type: 'url',
          placeholder:"Youtube Link",
          validation: Rule => Rule.uri({
            scheme: ['http', 'https', 'mailto', 'tel']
          })
        }),
        defineField(
          {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 200, // will be ignored if slugify is set
              slugify: input => input
                                   .toLowerCase()
                                   .replace(/\s+/g, '-')
                                   .slice(0, 200)
            }
          }
        )


  ]
})

//   defineField({
  //     name:"title",
  //     type:"string",
  //     title:"Title",
  //     // validation : Rule=> Rule.required().error("fill this")
  //     validation: (stop: any)=> stop.min(100).error("only 12 word allow")
  //   }),
  //   defineField({
  //     name:"slug",
  //     type:"slug",
  //     title:"slug",
  //     options:{
  //       source:"title"
  //     }
  //   }),
    // {
    //   name:"gender",
    //   type:"string",
    //   title:"Gender",
    //   options:{
    //     list:[
    //       {title:"femail",value:"female"},
    //       {title:"mail",value:"male"}
    //     ],
    //     layout:"radio",
    //     direction:"horizontal"
    //   }
  //   }