import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';


const data1 = [
  { docket: "L123456789", age: 'BLR', gender: "KER", status: 'Consignment booked', Action: '' },
  { docket: "L123456789", age: 'BLR', gender: "KER", status: 'Consignment', Action: '' },
  { docket: "L123456789", age: 'BLR', gender: "KER", status: 'In Transit', Action: '' },
  { docket: "L123456789", age: 'BLR', gender: "KER", status: 'Out for Delivery', Action: '' },
  { docket: "L123456789", age: 'BLR', gender: "KER", status: 'Delivered Successfully', Action: '' },
]

const data2 = [
  { name: 'Consignment booked', students: 400, fillColor: '#6ab04c', borderColor: 'rgba(255,206,86,0.2)' },
  { name: 'In Transit', students: 600, fillColor: '#686de0', borderColor: 'rgba(255,206,86,0.2)' },
  { name: 'out for delivery', students: 401, fillColor: '#B53471', borderColor: 'rgba(255,206,86,0.2)' },
  { name: 'Delivered successfully', students: 1450, fillColor: '#535c68', borderColor: 'rgba(255,206,86,0.2)' },
];

function App() {
  return (
    <div style={{ backgroundColor: '#f0f0f0', width: '900px', height: '200px', marginTop: '10px',marginLeft:'170px',transform:'scale(0.8)' }}>
     <div style={{ backgroundColor: '#f0f0f0', width: '900px', height: '600px', marginTop: '-110px' }}></div> 
  
    <div className="App">
      <div style={{marginRight:'-10px',position:'absolute'}}>
        <div style={{marginTop:'-640px'}}>
      <table>
        <tr>
          <th>Docket No</th>
          <th>From</th>
          <th>To</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
        {data1.map((val, key) => {
          let statusStyle = {}; 
          if (val.status === 'Consignment booked') {
            statusStyle = {
              backgroundColor: '#535c68', 
              color: 'white',
            };
          } else if (val.status === 'Consignment') {
            statusStyle = {
              backgroundColor: '#718093', 
              color: 'white',
            };
          } else if (val.status === 'In Transit') {
            statusStyle = {
              backgroundColor: '#686de0', 
              color: 'white',
            };
          } else if (val.status === 'Out for Delivery') {
            statusStyle = {
              backgroundColor: '#B53471', 
              color: 'white',
            };
          } else if (val.status === 'Delivered Successfully') {
            statusStyle = {
              backgroundColor: '#6ab04c', 
              color: 'white',
            };
          }
          

          return (
            
            <tr key={key}>
              <td>{val.docket}</td>
              <td>{val.age}</td>
              <td>{val.gender}</td>
              <td>
                <span
                  style={{
                    ...statusStyle, 
                    padding: '7px 5px',
                    borderRadius: '4px',
                  }}
                >
                  {val.status}
                </span>
              </td>
              <td>
                {val.Action === '' && (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="16" fill="currentColor" className="bi bi-circle" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="16" fill="currentColor" className="bi bi-circle" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    </svg>
                    <div style={{ marginLeft: '-7px', marginTop: '-11px' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="16" fill="currentColor" className="bi bi-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      </svg>
                    </div>
                    <div style={{ marginLeft: '9px', marginTop: '-20px' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="16" fill="currentColor" className="bi bi-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      </svg>
                    </div>
                  </>
                )}
                {val.Action}
                {(val.Action === 'B' || val.Action === 'C' || val.Action === 'D' || val.Action === 'E') && (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="16" fill="currentColor" className="bi bi-circle" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="16" fill="currentColor" className="bi bi-circle" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    </svg>
                    <div style={{ marginLeft: '-7px', marginTop: '-11px' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="16" fill="currentColor" className="bi bi-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      </svg>
                    </div>
                    <div style={{ marginLeft: '9px', marginTop: '-20px' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="16" fill="currentColor" className="bi bi-circle" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      </svg>
                    </div>
                  </>
                )}
              </td>
            </tr>
            
          )
        })}
      </table>
      </div>
      </div>
      
      
      <div style={{ display: 'flex', marginTop: '-1500px', marginLeft: '-20px' }}>
        <PieChart width={300} height={300}>
          <Pie
            data={data2}
            dataKey="students"
            outerRadius={80}
            innerRadius={40}
            stroke="rgba(255,206,86,0.2)" 
          >
            {data2.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.fillColor} />
            ))}
          </Pie>
        </PieChart>
        <div style={{ marginTop: '75px', marginLeft: '-50px' }}>
          <div style={{ flexDirection: 'column', alignItems: 'center', marginLeft: '10px' }}>
            {data2.map((entry, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', margin: '5px' }}>
                <div
                  style={{
                    width: '20px',
                    height: '20px',
                    backgroundColor: entry.fillColor,
                    border: `1px solid ${entry.borderColor}`, 
                    marginRight: '10px',
                    
                    margin:'5px',
                  }}
                ></div>
                {entry.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;