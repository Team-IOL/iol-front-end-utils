## Constants

<dl>
<dt><a href="#calcHeight1610">calcHeight1610</a> ⇒</dt>
<dd><p>Calculates the height of a 16:10 rectangle from the width.</p>
</dd>
<dt><a href="#formatCurrencyPHP">formatCurrencyPHP</a> : <code>Intl.NumberFormat</code></dt>
<dd><p>A utility for formatting numbers as currency in Philippine Peso (PHP) using the Filipino locale.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#createIndexMap">createIndexMap(array, idKey)</a> ⇒ <code>Record.&lt;any, any&gt;</code></dt>
<dd><p>Creates an index map for an array of objects based on a specified key.</p>
</dd>
<dt><a href="#findIndexById">findIndexById(indexMap, id)</a> ⇒ <code>number</code></dt>
<dd><p>Retrieves the index of an object in an array using its ID from a pre-constructed index map.</p>
</dd>
<dt><a href="#IS_ARRAY_EQUAL">IS_ARRAY_EQUAL(arr1, arr2)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if two arrays are equal by comparing their elements.</p>
</dd>
<dt><a href="#IS_VALID_ARRAY">IS_VALID_ARRAY(array)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if a value is a an array and if it contains an element.</p>
</dd>
<dt><a href="#IS_VALUE_ARRAY">IS_VALUE_ARRAY(array)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if a value is an array or not.</p>
</dd>
<dt><a href="#IS_FILE_LARGER_100MB">IS_FILE_LARGER_100MB(fileSize)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if file size is greater than 100MB</p>
</dd>
<dt><a href="#IS_FILE_LARGER_5MB">IS_FILE_LARGER_5MB(fileSize)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if file size is greater than 5MB</p>
</dd>
<dt><a href="#IS_FILE_LARGER_3MB">IS_FILE_LARGER_3MB(fileSize)</a> ⇒ <code>boolean</code></dt>
<dd><p>Checks if file size is greater than 3MB</p>
</dd>
<dt><a href="#hs_decodeIdToken">hs_decodeIdToken(params)</a> ⇒ <code>Object</code></dt>
<dd><p>HEY SUCCESS Decodes an ID token and extracts user information and roles.</p>
</dd>
<dt><a href="#convertToBase64">convertToBase64(text)</a> ⇒ <code>string</code></dt>
<dd><p>Converts a given text to a Base64 data URI for PNG/JPEG images.</p>
</dd>
<dt><a href="#customCapitalize">customCapitalize(params)</a> ⇒ <code>string</code></dt>
<dd><p>Capitalizes the first letter of a string or each substring separated by a specified character.</p>
</dd>
<dt><a href="#limitWords">limitWords(text, wordLimit)</a> ⇒</dt>
<dd><p>Limits the given text to a specified number of words.</p>
</dd>
<dt><a href="#getWordLength">getWordLength([text])</a> ⇒ <code>number</code></dt>
<dd><p>Calculates the number of words in a given text.</p>
</dd>
<dt><a href="#stringRemoveSpaceLowercase">stringRemoveSpaceLowercase(string_param)</a> ⇒ <code>string</code></dt>
<dd><p>Removes all spaces from a string and converts it to lowercase.</p>
</dd>
</dl>

<a name="calcHeight1610"></a>

## calcHeight1610 ⇒
Calculates the height of a 16:10 rectangle from the width.

**Kind**: global constant  
**Returns**: The height of the rectangle.  

| Param | Description |
| --- | --- |
| width | The width of the rectangle. |

<a name="formatCurrencyPHP"></a>

## formatCurrencyPHP : <code>Intl.NumberFormat</code>
A utility for formatting numbers as currency in Philippine Peso (PHP) using the Filipino locale.

**Kind**: global constant  
**Note**: This utility uses the "fil-PH" locale and is set to display numbers in decimal style with a minimum of 2 fraction digits.  
**Example**  
```js
const amount = 1234.56;
console.log(formatCurrencyPHP.format(amount)); // "1,234.56"
```
<a name="createIndexMap"></a>

## createIndexMap(array, idKey) ⇒ <code>Record.&lt;any, any&gt;</code>
Creates an index map for an array of objects based on a specified key.

**Kind**: global function  
**Returns**: <code>Record.&lt;any, any&gt;</code> - An index map where the keys are the values from the idKey of the objects and the values are their indices in the array.  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array.&lt;ArrayOfObjects&gt;</code> | The array of objects to create the index map from. |
| idKey | <code>string</code> | The key in the objects to use for indexing. |

**Example**  
```js
const arr = [{id: 1, name: 'Alice'}, {id: 2, name: 'Bob'}];
const indexMap = createIndexMap(arr, 'id');
console.log(indexMap); // {1: 0, 2: 1}
```
<a name="findIndexById"></a>

## findIndexById(indexMap, id) ⇒ <code>number</code>
Retrieves the index of an object in an array using its ID from a pre-constructed index map.

**Kind**: global function  
**Returns**: <code>number</code> - The index of the object in the original array. Returns `undefined` if the ID is not found in the index map.  

| Param | Type | Description |
| --- | --- | --- |
| indexMap | <code>Record.&lt;any, any&gt;</code> | The index map where the keys are object IDs and the values are their indices in the original array. |
| id | <code>string</code> | The ID of the object whose index needs to be retrieved. |

**Example**  
```js
const indexMap = {1: 0, 2: 1};
const index = findIndexById(indexMap, '1');
console.log(index); // 0
```
<a name="IS_ARRAY_EQUAL"></a>

## IS\_ARRAY\_EQUAL(arr1, arr2) ⇒ <code>boolean</code>
Checks if two arrays are equal by comparing their elements.

**Kind**: global function  
**Returns**: <code>boolean</code> - Returns `true` if the arrays are equal, otherwise `false`.  
**Note**: This function uses `xorWith` and `isEqual` for comparison and `isEmpty` to check the result. Ensure these utilities are imported and available in the scope.  

| Param | Type | Description |
| --- | --- | --- |
| arr1 | <code>Array.&lt;any&gt;</code> | The first array to compare. |
| arr2 | <code>Array.&lt;any&gt;</code> | The second array to compare. |

**Example**  
```js
const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
const areEqual = IS_ARRAY_EQUAL(array1, array2);
console.log(areEqual); // true
```
<a name="IS_VALID_ARRAY"></a>

## IS\_VALID\_ARRAY(array) ⇒ <code>boolean</code>
Checks if a value is a an array and if it contains an element.

**Kind**: global function  
**Returns**: <code>boolean</code> - Returns `true` if the value provided is an array and if it contains an element  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array.&lt;any&gt;</code> | value to check if array or not. |

<a name="IS_VALUE_ARRAY"></a>

## IS\_VALUE\_ARRAY(array) ⇒ <code>boolean</code>
Checks if a value is an array or not.

**Kind**: global function  
**Returns**: <code>boolean</code> - Returns `true` if the value provided is an array  

| Param | Type | Description |
| --- | --- | --- |
| array | <code>Array.&lt;any&gt;</code> | value to check if array or not. |

<a name="IS_FILE_LARGER_100MB"></a>

## IS\_FILE\_LARGER\_100MB(fileSize) ⇒ <code>boolean</code>
Checks if file size is greater than 100MB

**Kind**: global function  
**Returns**: <code>boolean</code> - Returns `true` if the value is greater than 100MB.  

| Param | Type | Description |
| --- | --- | --- |
| fileSize | <code>Array.&lt;any&gt;</code> | file size of the file for checking |

<a name="IS_FILE_LARGER_5MB"></a>

## IS\_FILE\_LARGER\_5MB(fileSize) ⇒ <code>boolean</code>
Checks if file size is greater than 5MB

**Kind**: global function  
**Returns**: <code>boolean</code> - Returns `true` if the value is greater than 5MB.  

| Param | Type | Description |
| --- | --- | --- |
| fileSize | <code>Array.&lt;any&gt;</code> | file size of the file for checking |

<a name="IS_FILE_LARGER_3MB"></a>

## IS\_FILE\_LARGER\_3MB(fileSize) ⇒ <code>boolean</code>
Checks if file size is greater than 3MB

**Kind**: global function  
**Returns**: <code>boolean</code> - Returns `true` if the value is greater than 3MB.  

| Param | Type | Description |
| --- | --- | --- |
| fileSize | <code>Array.&lt;any&gt;</code> | file size of the file for checking |

<a name="hs_decodeIdToken"></a>

## hs\_decodeIdToken(params) ⇒ <code>Object</code>
HEY SUCCESS Decodes an ID token and extracts user information and roles.

**Kind**: global function  
**Returns**: <code>Object</code> - An object containing user details and roles.  
**Note**: This function uses the `jwt-decode` library to decode the ID token.  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | The parameters for decoding. |
| params.IdToken | <code>string</code> | The ID token to decode. |
| params.ROLE_ID | <code>Object</code> | An object containing role identifiers. |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The user's name. |
| fname | <code>string</code> | The user's first name. |
| lname | <code>string</code> | The user's last name. |
| email | <code>string</code> | The user's email address. |
| email_verified | <code>boolean</code> | Indicates whether the user's email is verified. |
| username | <code>string</code> | The user's username. |
| roles | <code>Array.&lt;string&gt;</code> | The roles assigned to the user. |
| isUserFreelancer | <code>boolean</code> | Indicates if the user is a freelancer. |
| isUserHSAdmin | <code>boolean</code> | Indicates if the user is an HS admin. |
| isUserFacilitator | <code>boolean</code> | Indicates if the user is a facilitator. |
| isUserBusiness | <code>boolean</code> | Indicates if the user is a business admin. |

**Example**  
```js
const tokenDetails = hs_decodeIdToken({ IdToken: 'yourTokenHere', ROLE_ID: { freelancer: 'freelancerRoleID', hs_admin: 'hsAdminRoleID', facilitator: 'facilitatorRoleID', business_admin: 'businessAdminRoleID' } });
console.log(tokenDetails);
```
<a name="convertToBase64"></a>

## convertToBase64(text) ⇒ <code>string</code>
Converts a given text to a Base64 data URI for PNG/JPEG images.

**Kind**: global function  
**Returns**: <code>string</code> - A Base64 data URI formatted for PNG/JPEG images.  
**Note**: This function assumes the provided text is a valid Base64 encoded PNG or JPEG image.  

| Param | Type | Description |
| --- | --- | --- |
| text | <code>string</code> | The text to be converted to a Base64 data URI. |

**Example**  
```js
const base64Data = convertToBase64('yourBase64EncodedImageHere');
console.log(base64Data); // "data:image/png/jpeg;base64, yourBase64EncodedImageHere"
```
<a name="customCapitalize"></a>

## customCapitalize(params) ⇒ <code>string</code>
Capitalizes the first letter of a string or each substring separated by a specified character.

**Kind**: global function  
**Returns**: <code>string</code> - The capitalized string or capitalized substrings joined by the specified character.  
**Note**: This function assumes the `capitalize` function is available in the scope to capitalize individual strings.  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>Object</code> | The parameters for capitalization. |
| params.string | <code>string</code> | The string to be capitalized. |
| params.character | <code>string</code> | The character used to split the string. |

**Example**  
```js
const capitalizedString = customCapitalize({ string: 'hello-world', character: '-' });
console.log(capitalizedString); // "Hello-World"
```
<a name="limitWords"></a>

## limitWords(text, wordLimit) ⇒
Limits the given text to a specified number of words.

**Kind**: global function  
**Returns**: The limited text.  

| Param | Description |
| --- | --- |
| text | The original text. |
| wordLimit | The maximum number of words. |

<a name="getWordLength"></a>

## getWordLength([text]) ⇒ <code>number</code>
Calculates the number of words in a given text.

**Kind**: global function  
**Returns**: <code>number</code> - The number of words in the text.  
**Note**: This function splits the text based on whitespace to determine word count.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [text] | <code>string</code> | <code>&quot;\&quot;\&quot;&quot;</code> | The text whose word count needs to be determined. Defaults to an empty string. |

**Example**  
```js
const wordCount = getWordLength("Hello, how are you?");
console.log(wordCount); // 4
```
<a name="stringRemoveSpaceLowercase"></a>

## stringRemoveSpaceLowercase(string_param) ⇒ <code>string</code>
Removes all spaces from a string and converts it to lowercase.

**Kind**: global function  
**Returns**: <code>string</code> - The modified string without spaces and in lowercase.  
**Note**: This function uses regular expressions to remove spaces from the string.  

| Param | Type | Description |
| --- | --- | --- |
| string_param | <code>string</code> | The string from which spaces need to be removed and then converted to lowercase. |

**Example**  
```js
const modifiedString = stringRemoveSpaceLowercase("Hello World");
console.log(modifiedString); // "helloworld"
```
