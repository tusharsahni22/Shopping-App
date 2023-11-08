import React from 'react'

function SubSidebar() {
  return (
    <div>
       <SubTitle>
      <Head onClick={()=>{handleSubTitle("Back")}}>
        <LeftArrow/>
        </Head>
      <Line/>
      <Option>
        <Title>Your Profile</Title>
      </Option>
      <Line/>
      <Option>
        <Title>Order History</Title>
      </Option>
      </SubTitle>
  )
}

export default SubSidebar
