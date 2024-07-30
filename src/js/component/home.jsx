import React from "react";
import { Counter } from "./Counter";

	
	const Home = () => {
	return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh', 
      backgroundColor: '#f0f0f0' 
    }}>
      <Counter />
    </div>
  );
}

export default Home;
