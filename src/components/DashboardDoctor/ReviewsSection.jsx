import React from 'react'

function ReviewsSection({ reviews }) {
  return (
      <div>
        <h2 className="text-xl font-bold mb-4">Customer Reviews</h2>
        {reviews.length > 0 ? (
          <div className="space-y-6">
            {reviews.map((review) => (
              <div key={review.id} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <span className="text-yellow-400">{'★'.repeat(review.rating)}</span>
                  <span className="text-gray-300">{'★'.repeat(5 - review.rating)}</span>
                  <h4 className="ml-4 font-semibold text-gray-800">{review.author}</h4>
                </div>
                <p className="text-gray-600">{review.comment}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 italic">No reviews yet.</p>
        )}
      </div>
    );
}

export default ReviewsSection