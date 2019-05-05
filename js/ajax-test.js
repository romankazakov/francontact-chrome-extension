$.ajax({url: URL,
    type: 'GET',
    dataType: 'json',
    headers: {
                'header1': 'value1',
                'header2': 'value2'
            },
            contentType: 'application/json; charset=utf-8',
            success: function (result) {
               // CallBack(result);
            },
            error: function (error) {
                
            }
        });