
# Bullets-Diagramation

![whatsapp-button](https://user-images.githubusercontent.com/94660803/209262007-cd5162a2-4000-45ec-8185-9c0ee5cef581.png)

WhatsApp button to redirect to the chat of your whatsapp store

## Configuration

### Step 1 

Add to your `manifest.json` the dependency `itgloberspartnercl.bullets-diagramations`

### Step 2

To declare this component you must configure the following properties.

### `bullets-diagramations` props

| Prop name    | Type            | Description    | Default value                                                                                                                               |
| ------------ | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | 
| `bullets`      | `array`       | this propertie get a bullet array          | `[]`        |


The `bullet properties are:

1. `object`
2. `bullet` object:


| Prop name    | Type            | Description    | Required                                                                                                                              |
| ------------ | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | 
| `image`      | `string`       | url of the image  to show         | `777777777`        |
| `titleBullet`      | `string`       | Bullet title        | `Rooster Al Hrono`        |
| `link`      | `object`       | This attribute get a Link type `object`         | `url`        |


The `link` properties are:

1. `object`
2. `bullet` object:


| Prop name    | Type            | Description    | Required                                                                                                                              |
| ------------ | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | 
| `url`      | `string`       | url of the image  to show         | `true`        |
| `attributeNofollow`      | `boolean`       | Allow link tracking        | `false`        |
| `opennewTab`      | `boolean`       | Open a new tab         | `true`        |


## Customization

| CSS HANDLES    |                                                                                                                                                                               |
| ------------ | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | 
| `bullet_container`      |
| `bullet__link`      |
| `bullet__item`      |
| `bullet__image`      |
| `bullet__title`      |

