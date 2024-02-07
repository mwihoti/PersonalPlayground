import React from 'react';

function PriceListItem({ srNo, description, quantity, wash, dry }) {
  return (
    <tr>
      <td className="border px-4 py-2">{srNo}</td>
      <td className="border px-4 py-2">{description}</td>
      <td className="border px-4 py-2">{quantity}</td>
      <td className="border px-4 py-2">{wash}</td>
      <td className="border px-4 py-2">{dry}</td>
    </tr>
  );
}

function PriceList() {
  return (
    <div className="max-w-screen-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Our Domestic Laundry Price List</h1>
      <p className="mb-4">NOTE: All prices are based on 4 & 8kg load capacity or 60L laundry basket. FREE DELIVERY IN NAIROBI</p>
      <h1>GET YOUR CLOTHES WASHED&DRIED</h1>
      <table className="w-full">
        
        <thead>
          <tr>
            <th className="text-left border px-4 py-2">Sr. No.</th>
            <th className="text-left border px-4 py-2">Description</th>
            <th className="text-left border px-4 py-2">Quantity</th>
            <th className="text-left border px-4 py-2">Wash</th>
            <th className="text-left border px-4 py-2">Dry</th>
          </tr>
        </thead>
        <tbody>
          <PriceListItem srNo="1" description="Duvet & blanket (any size)" quantity="Per Piece" wash="500" dry="500" />
          <PriceListItem srNo="2" description="Bed sheet" quantity="4Kg" wash="500" dry="500" />
          <PriceListItem srNo="3" description="Normal Clothes" quantity="4Kg" wash="400" dry="400" />
          <PriceListItem srNo="4" description="Overalls" quantity="4Kg" wash="600" dry="600" />
          <PriceListItem srNo="5" description="Curtains" quantity="8Kg" wash="800" dry="800" />
          <PriceListItem srNo="6" description="Towels" quantity="4Kg" wash="500" dry="500" />
          <PriceListItem srNo="7" description="Ironing" quantity="4Kg" wash="400" dry="N/A" />
        </tbody>
      </table>
    </div>
  );
}

export default PriceList;
