import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Box = () => {
  const [selectedBox1, setSelectedBox1] = useState(null);
  const [selectedBox2, setSelectedBox2] = useState(null);
  const [box3Data, setBox3Data] = useState([]); // Data for the third box (fetched)
  const [newItem, setNewItem] = useState("");   // State for the input field

  // Box 1 data
  const box1Data = [
    { id: 1, label: 'General' },
    { id: 2, label: 'Password' },
    { id: 3, label: 'Price' },
    { id: 4, label: 'Treatment' },
  ];

  // Box 2 data
  const box2Data = {
    1: ['Overview', 'Statistics', 'Settings'],
    2: ['Messages', 'Drafts', 'Spam'],
    3: ['Today', 'Upcoming', 'Completed'],
    4: ['Injectable', 'Skin Improvement', 'Hair Removal', 'Soft Surgery', 'Plastic Surgery'],
  };

  // Fetch data for Box 3 based on Box 2 selection
  useEffect(() => {
    if (selectedBox2) {
      const fetchData = async () => {
        try {
          const response = await axios.get(`${process.env.REACT_APP_API_URL}/${selectedBox2}`);
          setBox3Data(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }
  }, [selectedBox2]);

  const handleBox1Select = (id) => {
    setSelectedBox1(id);
    setSelectedBox2(null);
    setBox3Data([]);
  };

  const handleBox2Select = (option) => {
    setSelectedBox2(option);
  };

  const handleAddItem = () => {
    if (newItem.trim() !== "") {
      setBox3Data([...box3Data, newItem]);
      setNewItem('');
    }
  };

  const handleDeleteItem = (index) => {
    const updatedData = box3Data.filter((_, i) => i !== index);
    setBox3Data(updatedData);
  };

  return (
    <div className="py-3 px-1" style={{ left: '0px', width: '100%' }}>
      <h1 style={{ left: '0px', width: 'fit-content', textAlign: 'left' }}>Settings</h1>
      
      {/* Box 1 (Main Box) */}
      <div className="box1" style={{ marginBottom: '20px' }}>
        <div className="d-flex flex-column" style={{ width: '400px', fontFamily: 'ui-sans-serif, system-ui, sans-serif', height: 'fit-content', backgroundColor: '#eff6ff', alignItems: 'center', borderRadius: '10px' }}>
          <nav className="flex-column gap-3" style={{ padding: '5px', width: '80%', height: 'fit-content' }}>
            {box1Data.map((item) => (
              <div
                key={item.id}
                onClick={() => handleBox1Select(item.id)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  paddingTop: '10px',
                  top: '10px',
                  borderRadius: '8px',
                  backgroundColor: selectedBox1 === item.id ? '#ffffff' : 'transparent',
                  color: selectedBox1 === item.id ? '#a855f7' : '#000000',
                  transition: 'background-color 0.3s, color 0.3s',
                  cursor: 'pointer',
                  height: '40px',
                  justifyContent: 'center',
                }}
              >
                <span style={{ fontSize: '16px' }}>{item.label}</span>
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* Box 2 (Secondary Box) */}
      {selectedBox1 && (
        <div className="box2" style={{ marginTop: '20px', width: '400px' }}>
          <div
            className="mx-4 mt-0"
            style={{
              textAlign: 'left',
              position: 'relative',
              left: '100%',
              paddingLeft: '10px',
              backgroundColor: '#ffffff',
              top: '-190px',
            }}
          >
            <h5>{box1Data.find((item) => item.id === selectedBox1).label} Options</h5>
            {box2Data[selectedBox1].map((option, index) => (
              <div
                key={index}
                onClick={() => handleBox2Select(option)}
                style={{
                  textAlign: 'left',
                  padding: '10px',
                  paddingLeft: '20px',
                  borderRadius: '8px',
                  backgroundColor: selectedBox2 === option ? '#eff6ff' : 'transparent',
                  color: selectedBox2 === option ? '#a855f7' : '#000000',
                  transition: 'background-color 0.3s, color 0.3s',
                  cursor: 'pointer',
                  marginBottom: '5px',
                }}
              >
                {option}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Box 3 (Dynamic Box with Add/Delete Feature) */}
      {selectedBox2 && (
        <div className="box3" style={{ marginTop: '20px', width: '800px', backgroundColor: '#eff6ff', padding: '10px', borderRadius: '10px', position: 'relative', left: '45%', top: '-450px', minHeight: '250px' }}>
          <h5 style={{ textAlign: 'left' }}>{selectedBox2} Options</h5>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {box3Data.map((item, index) => (
              <li
                key={index}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '10px',
                  borderRadius: '8px',
                  backgroundColor: '#eff6ff',
                  marginBottom: '5px',
                }}
              >
                {item}
                <button
                  onClick={() => handleDeleteItem(index)}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'red',
                    cursor: 'pointer',
                  }}
                >
                  ✖
                </button>
              </li>
            ))}
          </ul>

          {/* Input for adding new items */}
          <div style={{ display: 'flex', marginTop: '10px' }}>
            <input
              type="text"
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              placeholder="Add New Item"
              style={{
                flex: '1',
                padding: '10px',
                borderRadius: '8px',
                border: '1px solid #ccc',
              }}
            />
            <button
              onClick={handleAddItem}
              style={{
                padding: '10px',
                borderRadius: '8px',
                marginLeft: '10px',
                backgroundColor: '#ffffff',
                color: '#000000',
                border: 'none',
                borderRadius: '10px',
              }}
            >
              +
            </button>
          </div>
           {/* Save and Cancel Buttons */}
      <div className="mt-4">
        <button
          style={{ padding: '5px 10px', backgroundColor: '#ffffff', marginRight: '20px', borderRadius: '10px', border: 'none',width: '40%'   }}
        >
          Cancel
        </button>
        <button
          style={{ padding: '5px 10px', backgroundColor: '#a855f7', color: '#fff', borderRadius: '10px', border: 'none',width: '40%' }}
        >
          Save
        </button>
      </div>
        </div>
      )}

     
    </div>
  );
};

export default Box;
