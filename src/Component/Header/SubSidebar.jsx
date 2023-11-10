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
        <Title onClick={()=>{navigate("/myprofile",{state:{YourProfileTab:"Your Profile"}})}}>Your Profile</Title>
      </Option>
      <Line/>
      <Option>
        <Title onClick={()=>{navigate("/myprofile",{state:{OrderHistoryTab:"Order History"}})}}>Order History</Title>
      </Option>
      </SubTitle>
  )
}

export default SubSidebar
