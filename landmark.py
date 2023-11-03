import streamlit as st
from streamlit_drag_and_drop import st_drag_and_drop

def interactive_landmark_matching_game():
    st.title("Interactive Landmark Matching Game: India Edition")
    st.write("Drag and drop the landmarks to their corresponding cities in India.")

    # Define landmarks and their corresponding cities
    landmarks = {
        "Taj Mahal": "Agra",
        "Red Fort": "Delhi",
        "Gateway of India": "Mumbai",
        # Add more landmarks as needed
    }

    # Shuffle the landmarks for a random order
    shuffled_landmarks = list(landmarks.keys())
    st_drag_and_drop(shuffled_landmarks)

    # Display the correct matches
    st.subheader("Correct Matches:")
    for landmark, city in landmarks.items():
        st.write(f"- {landmark} in {city}")

    # Check the user's matches
    user_matches = st_drag_and_drop(shuffled_landmarks, "Drag and drop here to match")

    # Evaluate user's matches
    user_score = sum(1 for landmark, city in user_matches.items() if landmarks[landmark] == city)

    # Display the final score
    st.write(f"Your final score: {user_score} out of {len(landmarks)}")

if __name__ == "__main__":
    interactive_landmark_matching_game()
