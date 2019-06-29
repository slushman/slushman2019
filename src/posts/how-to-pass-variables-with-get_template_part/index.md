---
date: "2017-01-11"
title: "How to Pass Variables with get_template_part"
category: ["Code Samples"]
featuredImage: './adi-goldstein-FU5uVjZSMMw-unsplash.jpg'
featuredImageAccount: 'adigold1'
featuredImagePhotographer: 'Adi Goldstein'
---

I've had several occasions where I needed to use variables in a file called using get_template_part, like one of the files in the template-parts folder in _s. It took a while for me to find the proper answer, so I'm documenting it here. Just before you use get_template_part(), add set_query_var(). As the arguments, add the name of the variable, then the value. Like:

```php
set_query_var( 'user_id', $user_id );
```

In the template file, you can then use $user_id as you would any other variable.
