import React, { useState } from 'react';
import { X, Save, RotateCcw } from 'lucide-react';
import { StoryData } from '../types';
import { sound } from '../utils/audio';

interface CustomizerModalProps {
  data: StoryData;
  isOpen: boolean;
  onClose: () => void;
  onSave: (newData: StoryData) => void;
  onReset: () => void;
}

export const CustomizerModal: React.FC<CustomizerModalProps> = ({
  data,
  isOpen,
  onClose,
  onSave,
  onReset,
}) => {
  const [formData, setFormData] = useState<StoryData>({ ...data });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playTap();
    onSave(formData);
    onClose();
  };

  const handleReset = () => {
    sound.playTap();
    onReset();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-md bg-[#131313] text-[#FEFFEF] rounded-2xl border-2 border-[#B6F500] shadow-[8px_8px_0px_#0E0E0E] p-5 flex flex-col max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#201F1F] text-white flex items-center justify-center hover:bg-[#B6F500] hover:text-[#131313] transition-colors border border-white/10"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 mb-4">
          <span className="material-symbols-outlined text-[#B6F500] text-[22px] symbol-fill">
            tune
          </span>
          <div>
            <h3 className="font-syne font-extrabold text-[18px] uppercase tracking-tight text-[#FEFFEF]">
              Personalize Our Wrapped
            </h3>
            <p className="font-space text-[11px] text-[#C3CAAD]">
              Customize your couple retrospective details
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 font-space text-[12px]">
          {/* Partners' Names */}
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-[10px] uppercase font-bold text-[#C3CAAD] block mb-1">
                Your Name &amp; Initial
              </label>
              <div className="flex gap-1.5">
                <input
                  type="text"
                  value={formData.partner1Name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      partner1Name: e.target.value,
                      partner1Initial: e.target.value.charAt(0).toUpperCase() || 'I',
                    })
                  }
                  placeholder="e.g. Induu"
                  className="w-full bg-[#201F1F] border border-white/20 rounded p-2 text-white font-bold focus:border-[#B6F500] outline-none"
                />
                <input
                  type="text"
                  maxLength={1}
                  value={formData.partner1Initial}
                  onChange={(e) =>
                    setFormData({ ...formData, partner1Initial: e.target.value.toUpperCase() })
                  }
                  className="w-10 bg-[#201F1F] border border-white/20 rounded p-2 text-center text-[#B6F500] font-black focus:border-[#B6F500] outline-none"
                />
              </div>
            </div>

            <div>
              <label className="text-[10px] uppercase font-bold text-[#C3CAAD] block mb-1">
                Partner's Name &amp; Initial
              </label>
              <div className="flex gap-1.5">
                <input
                  type="text"
                  value={formData.partner2Name}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      partner2Name: e.target.value,
                      partner2Initial: e.target.value.charAt(0).toUpperCase() || 'A',
                    })
                  }
                  placeholder="e.g. Dory"
                  className="w-full bg-[#201F1F] border border-white/20 rounded p-2 text-white font-bold focus:border-[#B6F500] outline-none"
                />
                <input
                  type="text"
                  maxLength={1}
                  value={formData.partner2Initial}
                  onChange={(e) =>
                    setFormData({ ...formData, partner2Initial: e.target.value.toUpperCase() })
                  }
                  className="w-10 bg-[#201F1F] border border-white/20 rounded p-2 text-center text-[#B6F500] font-black focus:border-[#B6F500] outline-none"
                />
              </div>
            </div>
          </div>

          {/* Anniversary & Year */}
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-[10px] uppercase font-bold text-[#C3CAAD] block mb-1">
                Top Listener Since (Date)
              </label>
              <input
                type="text"
                value={formData.anniversaryDate}
                onChange={(e) => setFormData({ ...formData, anniversaryDate: e.target.value })}
                placeholder="14.02.20"
                className="w-full bg-[#201F1F] border border-white/20 rounded p-2 text-white font-bold focus:border-[#B6F500] outline-none"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase font-bold text-[#C3CAAD] block mb-1">
                Wrapped Edition Year
              </label>
              <input
                type="text"
                value={formData.year}
                onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                placeholder="2026"
                className="w-full bg-[#201F1F] border border-white/20 rounded p-2 text-white font-bold focus:border-[#B6F500] outline-none"
              />
            </div>
          </div>

          {/* Hours & Minutes Together */}
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="text-[10px] uppercase font-bold text-[#C3CAAD] block mb-1">
                Total Hours Together
              </label>
              <input
                type="text"
                value={formData.hoursTogether}
                onChange={(e) => setFormData({ ...formData, hoursTogether: e.target.value })}
                placeholder="9,048"
                className="w-full bg-[#201F1F] border border-white/20 rounded p-2 text-white font-bold focus:border-[#B6F500] outline-none"
              />
            </div>
            <div>
              <label className="text-[10px] uppercase font-bold text-[#C3CAAD] block mb-1">
                Total Minutes
              </label>
              <input
                type="text"
                value={formData.minutesTogether}
                onChange={(e) => setFormData({ ...formData, minutesTogether: e.target.value })}
                placeholder="542,880"
                className="w-full bg-[#201F1F] border border-white/20 rounded p-2 text-white font-bold focus:border-[#B6F500] outline-none"
              />
            </div>
          </div>

          {/* Top Song */}
          <div>
            <label className="text-[10px] uppercase font-bold text-[#C3CAAD] block mb-1">
              Top Song &amp; Artist
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={formData.topSong.title}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    topSong: { ...formData.topSong, title: e.target.value },
                  })
                }
                placeholder="Song Title"
                className="w-1/2 bg-[#201F1F] border border-white/20 rounded p-2 text-white font-bold focus:border-[#B6F500] outline-none"
              />
              <input
                type="text"
                value={formData.topSong.artist}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    topSong: { ...formData.topSong, artist: e.target.value },
                  })
                }
                placeholder="Artist / Edit"
                className="w-1/2 bg-[#201F1F] border border-white/20 rounded p-2 text-white font-bold focus:border-[#B6F500] outline-none"
              />
            </div>
          </div>

          {/* Song Memory Quote */}
          <div>
            <label className="text-[10px] uppercase font-bold text-[#C3CAAD] block mb-1">
              Inside Joke / Core Memory Quote
            </label>
            <input
              type="text"
              value={formData.topSong.quote}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  topSong: { ...formData.topSong, quote: e.target.value },
                })
              }
              placeholder="Quote about your memory..."
              className="w-full bg-[#201F1F] border border-white/20 rounded p-2 text-white font-medium focus:border-[#B6F500] outline-none"
            />
          </div>

          {/* Personality Title */}
          <div>
            <label className="text-[10px] uppercase font-bold text-[#C3CAAD] block mb-1">
              Listening Personality Title
            </label>
            <input
              type="text"
              value={formData.personalityTitle}
              onChange={(e) => setFormData({ ...formData, personalityTitle: e.target.value })}
              placeholder="e.g. THE PROTECTOR WHO OVERTHINKS DINNER"
              className="w-full bg-[#201F1F] border border-white/20 rounded p-2 text-white font-bold focus:border-[#B6F500] outline-none"
            />
          </div>

          <div>
            <label className="text-[10px] uppercase font-bold text-[#C3CAAD] block mb-1">
              Personality Description
            </label>
            <input
              type="text"
              value={formData.personalityDesc}
              onChange={(e) => setFormData({ ...formData, personalityDesc: e.target.value })}
              placeholder="e.g. You take care of everything, except choosing what to eat."
              className="w-full bg-[#201F1F] border border-white/20 rounded p-2 text-white font-medium focus:border-[#B6F500] outline-none"
            />
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-2 mt-2 pt-2 border-t border-white/10">
            <button
              type="button"
              onClick={handleReset}
              className="px-3 py-2.5 rounded-xl bg-[#201F1F] text-[#C3CAAD] hover:text-white flex items-center gap-1.5 border border-white/10 text-[11px] uppercase font-bold"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2.5 rounded-xl bg-[#B6F500] text-[#131313] hover:bg-[#c2fc08] flex items-center justify-center gap-1.5 font-space font-extrabold text-[12px] uppercase border border-[#131313] shadow-[2px_2px_0px_#0E0E0E]"
            >
              <Save className="w-4 h-4" />
              <span>Save &amp; Apply</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
