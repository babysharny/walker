/**
 * Created by simon on 08.12.16.
 */
'use strict';

app.factory('TreeService', [

  function() {

    var tree = {
      value: 1,
      nodes: [
        {
          value: 2,
          nodes: [
            {
              value: 4
            },
            {
              value: 5
            }
          ]
        },
        {
          value: 3,
          nodes: [
            {
              value: 6,
              nodes: []
            },
            {
              value: 7
            }
          ]
        }
      ]
    };

    return {
      getTree: function() {
        return tree;
      }
    };
  }
]);
