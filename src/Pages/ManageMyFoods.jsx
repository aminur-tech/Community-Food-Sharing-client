import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Providers/AuthContext";
import useAxiosSecure from "../Hooks/UseAxiosSecure";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const ManageMyFoods = () => {
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axiosSecure
        .get(`/add-food?email=${user.email}`)
        .then((res) => setFoods(res.data))
        .catch((err) => console.error(err));
    }
  }, [user, axiosSecure]);


//update food
const handleUpdateFood = () =>{

}



  // Delete food
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Once deleted, you won’t be able to recover this food item!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/foods/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              setFoods(foods.filter((food) => food._id !== id));
              toast.success("Food deleted successfully!");
            }
          })
          .catch((err) => {
            console.error(err);
            toast.error("Failed to delete!");
          });
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6 text-sky-800">
          Manage My Foods 🍽️
        </h2>

        {foods.length === 0 ? (
          <p className="text-center text-gray-500">
            You haven't added any foods yet.
          </p>
        ) : (
          <div className="overflow-x-auto shadow-lg rounded-xl bg-white">
            <table className="table w-full">
              <thead className="bg-sky-600 text-white">
                <tr>
                  <th>No</th>
                  <th>Food</th>
                  <th>Quantity</th>
                  <th>Location</th>
                  <th>Expire Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {foods.map((food, index) => (
                  <tr key={food._id} className="hover:bg-sky-50">
                    <td>{index + 1}</td>
                    <td className="flex items-center gap-3">
                      <img
                        src={food.food_image}
                        alt={food.food_name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <span className="font-semibold text-gray-700">
                        {food.food_name}
                      </span>
                    </td>
                    <td>{food.food_quantity}</td>
                    <td>{food.pickup_location}</td>
                    <td>{food.expire_date}</td>
                    <td>
                      <div className="flex gap-2">
                        <button onClick={handleUpdateFood}
                          className="btn btn-sm bg-green-500 hover:bg-green-600 text-white"
                        >
                          Update
                        </button>
                        <button
                          onClick={() => handleDelete(food._id)}
                          className="btn btn-sm bg-red-500 hover:bg-red-600 text-white"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageMyFoods;
