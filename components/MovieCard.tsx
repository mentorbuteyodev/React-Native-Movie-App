import { icons } from '@/constants/icons'
import { Link } from 'expo-router'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

type Movie = {
  id: number
  poster_path: string | null
  title: string
  vote_average: number
  release_date: string
}

type Props = Movie & { width: number }

const MovieCard = ({ id, poster_path, title, vote_average, width }: Props) => {
  return (
    <View style={{ padding: 4 }}>
      <Link href={`/movies/[id]`} asChild>
        <TouchableOpacity style={{ width }}>
          <Image
            source={{
              uri: poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : `https://via.placeholder/600x500/1a1a1a/ffffff.png`,
            }}
            style={{ width: '100%', height: width * 1.5, borderRadius: 10 }}
            resizeMode="cover"
          />
          <Text style={{ color: '#fff', fontWeight: 'bold', marginTop: 4, fontSize: 12 }}>
            {title}
          </Text>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 }}>
            <Image source={icons.star} style={{ width: 16, height: 16 }} />
            <Text style={{ color: '#fff', fontSize: 12, marginLeft: 4 }}>
              {Math.round(vote_average / 2)}
            </Text>
          </View>
        </TouchableOpacity>
      </Link>
    </View>
  )
}

export default MovieCard
