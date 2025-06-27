export interface MeditationBenefit {
  id: string;
  title: string;
  description: string;
  image: string;
  backgroundColor: string;
  backgroundImage: string;
  musicUrl: string;
  breathingPattern: {
    inhale: number;
    hold: number;
    exhale: number;
  };
  content: {
    intro: string;
    benefits: string[];
    instructions: string;
  };
}

export const meditationBenefits: MeditationBenefit[] = [
  {
    id: 'stress-relief',
    title: 'Stress Relief',
    description: 'Release tension and find inner calm through guided breathing',
    image: 'https://images.pexels.com/photos/355863/pexels-photo-355863.jpeg?auto=compress&cs=tinysrgb&w=800',
    backgroundColor: '',
    backgroundImage: 'https://images.pexels.com/photos/1229042/pexels-photo-1229042.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
    musicUrl: '/audio/ocean-waves.mp3',
    breathingPattern: {
      inhale: 4,
      hold: 4,
      exhale: 6
    },
    content: {
      intro: 'Let go of the day\'s stress and tension with this calming breathing exercise.',
      benefits: [
        'Reduces cortisol levels',
        'Calms the nervous system', 
        'Improves sleep quality',
        'Enhances emotional regulation'
      ],
      instructions: 'Find a comfortable position and focus on your breath. Let the gentle rhythm guide you to a state of deep relaxation.'
    }
  },
  {
    id: 'focus-enhancement',
    title: 'Enhanced Focus',
    description: 'Sharpen your concentration and mental clarity',
    image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800',
    backgroundColor: 'from-green-900 via-emerald-800 to-teal-900',
    backgroundImage: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
    musicUrl: '/audio/forest-sounds.mp3',
    breathingPattern: {
      inhale: 4,
      hold: 2,
      exhale: 4
    },
    content: {
      intro: 'Train your mind to maintain sharp focus and unwavering attention.',
      benefits: [
        'Improves cognitive performance',
        'Increases attention span',
        'Enhances working memory',
        'Reduces mind wandering'
      ],
      instructions: 'Center your attention on the breathing pattern. When your mind wanders, gently return to the rhythm.'
    }
  },
  {
    id: 'emotional-balance',
    title: 'Emotional Balance',
    description: 'Cultivate inner peace and emotional stability',
    image: 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=800',
    backgroundColor: 'from-purple-900 via-pink-800 to-rose-900',
    backgroundImage: 'https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
    musicUrl: '/audio/gentle-rain.mp3',
    breathingPattern: {
      inhale: 5,
      hold: 3,
      exhale: 5
    },
    content: {
      intro: 'Develop emotional resilience and find balance in challenging moments.',
      benefits: [
        'Regulates emotional responses',
        'Increases self-awareness',
        'Builds emotional intelligence',
        'Promotes inner stability'
      ],
      instructions: 'Breathe with intention and allow each exhale to release emotional tension.'
    }
  },
  {
    id: 'better-sleep',
    title: 'Better Sleep',
    description: 'Prepare your mind and body for restful sleep',
    image: 'https://images.pexels.com/photos/312839/pexels-photo-312839.jpeg?auto=compress&cs=tinysrgb&w=800',
    backgroundColor: 'from-indigo-900 via-purple-900 to-blue-900',
    backgroundImage: 'https://images.pexels.com/photos/1624496/pexels-photo-1624496.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
    musicUrl: '/audio/night-ambience.mp3',
    breathingPattern: {
      inhale: 4,
      hold: 7,
      exhale: 8
    },
    content: {
      intro: 'Wind down with this relaxing breathing technique designed to promote deep sleep.',
      benefits: [
        'Activates parasympathetic nervous system',
        'Reduces racing thoughts',
        'Lowers heart rate',
        'Promotes natural sleep cycles'
      ],
      instructions: 'Allow your body to sink deeper into relaxation with each breath cycle.'
    }
  },
  {
    id: 'anxiety-relief',
    title: 'Anxiety Relief',
    description: 'Find calm and reduce anxious thoughts',
    image: 'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=800',
    backgroundColor: 'from-cyan-900 via-blue-800 to-indigo-900',
    backgroundImage: 'https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080',
    musicUrl: '/audio/mountain-breeze.mp3',
    breathingPattern: {
      inhale: 4,
      hold: 4,
      exhale: 4
    },
    content: {
      intro: 'Use this grounding breathing technique to ease anxiety and restore calm.',
      benefits: [
        'Activates relaxation response',
        'Reduces physical anxiety symptoms',
        'Calms racing thoughts',
        'Increases sense of control'
      ],
      instructions: 'Focus on the steady, even rhythm of your breath. Let each cycle bring you closer to peace.'
    }
  }
]