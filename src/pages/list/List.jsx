import Card from '../../components/card/Card';
import Filter from '../../components/filter/Filter';
import {listData} from '../../lib/tempData';

import './list.scss'

const List = () => {

    const data = listData;

  return (
    <div className='list'>
        <div className="listContainer">
            <div className="wrapper">
                <Filter/>
                {data.map(item =>(
                    <Card key={item.id} item={item}/>
                ))}
            </div>
        </div>
        <div className="mapContainer">

        </div>
    </div>
  )
}

export default List