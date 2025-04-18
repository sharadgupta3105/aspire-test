// stores/cards.ts
import { defineStore } from 'pinia';

export const useCardStore = defineStore('cards', {
  state: () => ({
    cards_data: {
      ID1: {
        name: 'Sharad',
        number: '1234343434322025',
        date: '12/22',
        cvv: '123',
        freeze: false,
      },
      ID2: {
        name: 'Thai',
        number: '1234343434322224',
        date: '6/25',
        cvv: '123',
        freeze: false,
      },
    } as Record<
      string,
      {
        name: string;
        number: string | number;
        date: string;
        cvv: string;
        freeze: boolean;
      }
    >,
    active_card_name: 'ID1' as string | null,
  }),

  actions: {
    addCard(name: string) {
      const uid = () => Math.random().toString(36).substring(2, 10);
      const payload = {
        id: uid(),
        card: {
          name,
          number: Math.floor(1000000000000000 + Math.random() * 9000000000000000),
          date: Math.floor(Math.random() * 10 + 1) + '/' + Math.floor(Math.random() * 10 + 22),
          cvv: '123',
          freeze: false,
        },
      };
      this.cards_data[payload.id] = payload.card;
    },

    updateActiveCard(payload: { slide: string }) {
      this.active_card_name = payload.slide;
    },

    changeFreezeStatus(payload: { card: string }) {
      const id = payload.card;
      if (this.cards_data[id]) {
        this.cards_data[id].freeze = !this.cards_data[id].freeze;
      }
    },

    deleteCard(id: string) {
      delete this.cards_data[id];

      // Reset active card to first remaining
      const remainingKeys = Object.keys(this.cards_data);
      this.active_card_name = remainingKeys[0] || null;
    },
  },
});
