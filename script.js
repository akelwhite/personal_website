document.addEventListener('DOMContentLoaded', function() {
    const partyFeed = document.getElementById('partyFeed');
    const loadMoreBtn = document.getElementById('loadMoreBtn');

    const partyData = [
        { image: 'party1.jpg', caption: 'Joseph: Having a really great time at @Hannah_Bannah\'s party rn 😆' },
        { image: 'party2.jpeg', caption: 'Damian: @Party_Pizza_Guy really knows how to throw a party 🎉' },
        { image: 'party3.jpeg', caption: 'Marie: You can probably tell from our faces we are happy' },
    ];

    let index = 0;

    function addPartyItem() {
        if (index < partyData.length) {
            const item = partyData[index];
            const partyItem = document.createElement('div');
            partyItem.classList.add('party-item');
            partyItem.innerHTML = `
                <img src="${item.image}" alt="Party Image">
                <p class="party-caption">${item.caption}</p>
            `;
            partyFeed.appendChild(partyItem);
            index++;
        } else {
            loadMoreBtn.style.display = 'none'; // Hide button if no more items
        }
    }

    addPartyItem();

    loadMoreBtn.addEventListener('click', function() {
        addPartyItem();
    });
});
