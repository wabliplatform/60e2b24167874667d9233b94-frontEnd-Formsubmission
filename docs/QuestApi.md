# TempApi.QuestApi

All URIs are relative to *http://83.212.100.226:3001/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createquest**](QuestApi.md#createquest) | **POST** /quest | Creates the data
[**deletequest**](QuestApi.md#deletequest) | **DELETE** /quest/{questId} | Delete the element
[**getAllquest**](QuestApi.md#getAllquest) | **GET** /quest/getAll | Get all the data
[**getByParamsquest**](QuestApi.md#getByParamsquest) | **GET** /quest/getByParams | Get all the data based on user query
[**getquest**](QuestApi.md#getquest) | **GET** /quest/{questId} | Get the element
[**updatequest**](QuestApi.md#updatequest) | **PUT** /quest/{questId} | Updates the element



## createquest

> Quest createquest(quest)

Creates the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.QuestApi();
let quest = new TempApi.Quest(); // Quest | data to be created
apiInstance.createquest(quest, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **quest** | [**Quest**](Quest.md)| data to be created | 

### Return type

[**Quest**](Quest.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## deletequest

> deletequest(questId)

Delete the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.QuestApi();
let questId = "questId_example"; // String | the Id parameter
apiInstance.deletequest(questId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questId** | **String**| the Id parameter | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## getAllquest

> [Quest] getAllquest()

Get all the data

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.QuestApi();
apiInstance.getAllquest((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Quest]**](Quest.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getByParamsquest

> [Quest] getByParamsquest(filter)

Get all the data based on user query

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.QuestApi();
let filter = "filter_example"; // String | the query based on which the search is performed
apiInstance.getByParamsquest(filter, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| the query based on which the search is performed | 

### Return type

[**[Quest]**](Quest.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getquest

> Quest getquest(questId)

Get the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.QuestApi();
let questId = "questId_example"; // String | the Id parameter
apiInstance.getquest(questId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questId** | **String**| the Id parameter | 

### Return type

[**Quest**](Quest.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updatequest

> Quest updatequest(questId, opts)

Updates the element

### Example

```javascript
import TempApi from 'temp_api';

let apiInstance = new TempApi.QuestApi();
let questId = "questId_example"; // String | the Id parameter
let opts = {
  'quest': new TempApi.Quest() // Quest | data to be updated
};
apiInstance.updatequest(questId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **questId** | **String**| the Id parameter | 
 **quest** | [**Quest**](Quest.md)| data to be updated | [optional] 

### Return type

[**Quest**](Quest.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

