import { Await, useLoaderData } from 'react-router-dom';
import Card from '../../components/card/Card';
import Filter from '../../components/filter/Filter';
import Map from '../../components/map/Map';

import './list.scss'
import { Suspense } from 'react';

function List() {
    const data = useLoaderData();
  
    return (
      <div className="list">
        <div className="listContainer">
          <div className="wrapper">
            <Filter />
            <Suspense fallback={<p>Loading...</p>}>
              <Await
                resolve={data.postResponse}
                errorElement={<p>Error loading posts!</p>}
              >
                {(postResponse) =>
                  postResponse.data.map((post) => (
                    <Card key={post.id} item={post} />
                  ))
                }
              </Await>
            </Suspense>
          </div>
        </div>
        <div className="mapContainer">
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={data.postResponse}
              errorElement={<p>Error loading posts!</p>}
            >
              {(postResponse) => <Map items={postResponse.data} />}
            </Await>
          </Suspense>
        </div>
      </div>
    );
  }
  
  export default List;