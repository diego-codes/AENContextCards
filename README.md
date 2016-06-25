#Austin EcoNetwork Context Cards

These notes give bigger context to what is happening environmentally in Austin for Austin EcoNetwork.

**Only to be deployed in a Wordpress environment**

##Usage
To create a new note go to the notes post type link on Admin Dashboard and create a new one.

Question goes in the title and answer goes in the body.

On right side panel create or add to existing topic.

Publish.


##Required plugins
- [WP REST API](https://wordpress.org/plugins/json-rest-api/)
- [Custom Post Type UI](https://wordpress.org/plugins/custom-post-type-ui/)


###Custom Post Type UI Import Data

    {"note": {
			"name":"notes",
			"label":"Notes",
			"singular_label":"Note",
			"description":"Description of entire notes app.",
			"public":"true",
			"show_ui":"true",
			"has_archive":"false",
			"has_archive_string":"",
			"exclude_from_search":"false",
			"capability_type":"post",
			"hierarchical":"false",
			"rewrite":"true",
			"rewrite_slug":"",
			"rewrite_withfront":"true",
			"query_var":"true",
			"menu_position":"",
			"show_in_menu":"true",
			"show_in_menu_string":"",
			"menu_icon":"",
			"supports":["title","editor","author"],
			"taxonomies":["topics"],
			"labels":{
				"menu_name":"",
				"all_items":"",
				"add_new":"",
				"add_new_item":"",
				"edit":"",
				"edit_item":"",
				"new_item":"",
				"view":"",
				"view_item":"",
				"search_items":"",
				"not_found":"",
				"not_found_in_trash":"",
				"parent":""
			},
			"custom_supports":""
			}
		}
